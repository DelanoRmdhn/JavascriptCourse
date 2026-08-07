'use strict';

//LATIHAN SOAL 1 : HIGHER ORDER FUNCTION

/*
Challenge 1 — Restaurant Workflow ⭐

Buat Higher Order Function bernama processOrder.

Contoh penggunaan:

const orders = [
  'Nasi Goreng',
  'Mie Ayam',
  'Sate Ayam',
];

processOrder(orders, masak);

Output

Menyiapkan dapur...
Memasak Nasi Goreng
Memasak Mie Ayam
Memasak Sate Ayam
Semua pesanan selesai!
*/

const orders = ['Nasi Goreng', 'Mie Ayam', 'Sate Ayam'];

const jenisMasakan = function (order) {
  console.log(`Memasak ${order}`);
};
const processOrder = function (orders, masak) {
  console.log('Menyiapkan dapur...');
  for (const order of orders) {
    masak(order);
  }
  console.log('Semua Pesanan Selesai');
};

processOrder(orders, jenisMasakan);

/*
Challenge 2 — Dynamic Notification ⭐⭐

Data

const users = [
  'Delano',
  'Rangga',
  'Fadhil',
];

Buat HOF

sendNotification(users, callback);

Buat 3 callback

sendEmail
sendSMS
sendWhatsApp

Output jika

sendNotification(users, sendEmail);
Email berhasil dikirim ke Delano
Email berhasil dikirim ke Rangga
Email berhasil dikirim ke Fadhil
*/
const users = ['Delano', 'Rangga', 'Fadhil'];

const sendEmail = function (user) {
  console.log(`Email berhasil dikirim ke ${user}`);
};

const sendSMS = function (user) {
  console.log(`SMS berhasil dikirim ke ${user}`);
};

const sendWhatsApp = function (user) {
  console.log(`WhatsApp berhasil dikirim ke ${user}`);
};

const sendNotification = function (users, callback) {
  for (const user of users) {
    callback(user);
  }
};

sendNotification(users, sendEmail);

/*
Challenge 3 — POS System ⭐⭐

Data

const cart = [
  {
    name: 'Burger',
    qty: 2,
    price: 25000,
  },
  {
    name: 'Cola',
    qty: 3,
    price: 8000,
  },
];

Buat HOF

checkout(cart, callback);

Buat callback

printReceipt
calculateTotal
showThankYou

Output

========== STRUK ==========
Burger x2
Cola x3
===========================
Total : Rp74000
Terima kasih sudah membeli.
*/

const cart = [
  {
    name: 'Burger',
    qty: 2,
    price: 25000,
  },
  {
    name: 'Cola',
    qty: 3,
    price: 8000,
  },
];
const printReceipt = function (cart) {
  console.log('========== STRUK ==========');

  for (const { name, qty } of cart) {
    console.log(`${name} x${qty}`);
  }

  console.log('===========================');
};

const calculateTotal = function (cart) {
  let total = 0;

  for (const { price, qty } of cart) {
    total += price * qty;
  }

  console.log(`Total : Rp${total}`);
};

const showThankYou = function () {
  console.log('Terima kasih sudah membeli.');
};

const checkout = function (cart, ...callbacks) {
  for (const callback of callbacks) {
    callback(cart);
  }
};

checkout(cart, printReceipt, calculateTotal, showThankYou);

/*
Challenge 4 — Kitchen Simulator ⭐⭐⭐

Data

const ingredients = [
  'Tomat',
  'Bawang',
  'Cabai',
  'Daging',
];

Buat callback

wash
cut
cook
serve

Lalu buat HOF

kitchen(ingredients, callback);

Misalnya

kitchen(ingredients, wash);

Output

Tomat dicuci
Bawang dicuci
Cabai dicuci
Daging dicuci
*/

const ingredients = ['Tomat', 'Bawang', 'Cabai', 'Daging'];

const wash = function (ingredient) {
  console.log(`${ingredient} dicuci`);
};

const cut = function (ingredient) {
  console.log(`${ingredient} dipotong`);
};

const cook = function (ingredient) {
  console.log(`${ingredient} dimasak`);
};

const serve = function (ingredient) {
  console.log(`${ingredient} dihidangkan`);
};
const kitchen = function (ingredients, ...callbacks) {
  for (const callback of callbacks) {
    for (const ingredient of ingredients) {
      callback(ingredient);
    }
    console.log('\n');
  }
};
kitchen(ingredients, wash, cut, cook, serve);

/*
Challenge 6 — Smart Processor ⭐⭐⭐⭐

Data

const students = [
  {
    name: 'Delano',
    score: 95,
  },
  {
    name: 'Rangga',
    score: 82,
  },
  {
    name: 'Fadhil',
    score: 70,
  },
];

Buat callback

showName
showPassed
showScore

Lalu

processStudents(students, showName);
processStudents(students, showPassed);
processStudents(students, showScore);

Output berbeda sesuai callback.
*/

const students = [
  {
    name: 'Delano',
    score: 95,
  },
  {
    name: 'Rangga',
    score: 82,
  },
  {
    name: 'Fadhil',
    score: 70,
  },
];

const showName = function ({ name }) {
  console.log(`Nama : ${name}`);
};

const showPassed = function ({ name, score }) {
  if (score >= 75 && score <= 100) {
    console.log(`${name} Lulus dengan Skor : ${score}`);
  } else {
    console.log(
      `${name} Belum Lulus, Kamu harus remedial dengan selisih skor ${75 - score} poin!`,
    );
  }
};

const showScore = function ({ score }) {
  console.log(`Score Kamu : ${score}`);
};

const processStudents = function (students, callback) {
  for (const student of students) {
    callback(student);
  }
};

processStudents(students, showName);
processStudents(students, showPassed);
processStudents(students, showScore);

/*
🔥 Final Boss (Level Jonas Schmedtmann)

Buat sebuah mini framework memasak.

Alur yang diinginkan:

const foods = [
  {
    name: 'Burger',
    ingredients: ['Bun', 'Patty', 'Cheese'],
  },
  {
    name: 'Pizza',
    ingredients: ['Dough', 'Cheese'],
  },
];

Callback

prepare()
cook()
serve()
cleanKitchen()

Lalu HOF

restaurant(
foods,
prepare,
cook,
serve,
cleanKitchen
);

Output

======== Burger ========

Menyiapkan Bun
Menyiapkan Patty
Menyiapkan Cheese

Burger sedang dimasak...

Burger siap disajikan.

Membersihkan dapur...

======== Pizza ========

Menyiapkan Dough
Menyiapkan Cheese

Pizza sedang dimasak...

Pizza siap disajikan.

Membersihkan dapur...
*/

const foods = [
  {
    name: 'Burger',
    ingredients: ['Bun', 'Patty', 'Cheese'],
  },
  {
    name: 'Pizza',
    ingredients: ['Dough', 'Cheese'],
  },
];

const prepareMeal = function ({ name, ingredients }) {
  console.log(`======== ${name} ========`);
  for (const ingredient of ingredients) {
    console.log(`Menyiapkan ${ingredient}`);
  }
};
const cookMeal = function ({ name }) {
  console.log(`${name} sedang dimasak`);
};
const serveMeal = function ({ name }) {
  console.log(`${name} siap disajikan.`);
};
const cleanKitchen = function () {
  console.log(`Membersihkan dapur...`);
};

const restaurant = function (foods, ...callbacks) {
  for (const food of foods) {
    for (const callback of callbacks) {
      callback(food);
    }
    console.log(`\n`);
  }
};

restaurant(foods, prepareMeal, cookMeal, serveMeal, cleanKitchen);
