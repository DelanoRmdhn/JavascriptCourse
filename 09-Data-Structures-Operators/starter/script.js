'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = [
  {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      address,
    }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
      );
    },

    orderPasta(ing1, ing2, ing3) {
      console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`,
      );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
  },
];

/*
FOR OF : Perulangan yang digunakan apabila kita hanya ingin berfokus pada pengambilan nilai dari suatu iterable tanpa memerdulikan indexnya.


*/

const allMenu = [...restaurant[0].starterMenu, ...restaurant[0].mainMenu];
for (const menu of allMenu) console.log(menu);

console.log(`-------------------`);

//ketika butuh index
for (const [index, menu] of allMenu.entries()) {
  console.log(`${index + 1} : ${menu}`);
}

console.log(`------------------- LATIHAN -------------------`);
/*LATIHAN FOR OF */

/* 
🟢 Level 1 - Dasar
Soal 1 - Cetak Semua Buah

Diberikan array berikut.

const fruits = ["Apple", "Orange", "Banana", "Mango"];

Output yang diharapkan

Apple
Orange
Banana
Mango
*/

const fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
for (const fruit of fruits) console.log(fruit);

/* 
Soal 2 - Nomori Daftar

Gunakan entries().

const menu = ["Pizza", "Burger", "Pasta"];

Output

1. Pizza
2. Burger
3. Pasta
*/
const menu = ['Pizza', 'Burger', 'Pasta'];
for (const [i, menuName] of menu.entries())
  console.log(`${i + 1} : ${menuName}`);

/* 
Soal 3 - Hitung Total
const prices = [1000, 5000, 2500, 1500];

Hitung total seluruh harga.

Output

10000
*/
let totalPrices = 0;
const prices = [1000, 5000, 2500, 1500];
for (const price of prices) totalPrices += price;
console.log(totalPrices);

/* 
🟡 Level 2 - Object
Soal 4 - Cetak Nama Produk
const products = [
  { name: "Indomie", price: 3500 },
  { name: "Teh Botol", price: 5000 },
  { name: "Aqua", price: 4000 },
];

Output

Indomie
Teh Botol
Aqua
*/

const products = [
  { name: 'Indomie', price: 3500 },
  { name: 'Teh Botol', price: 5000 },
  { name: 'Aqua', price: 4000 },
];

for (const product of products) {
  console.log(product.name);
}

/* 
Soal 5 - Cetak Nama dan Harga

Output

Indomie - Rp3500
Teh Botol - Rp5000
Aqua - Rp4000
*/

for (const { name, price } of products) console.log(`${name} - Rp${price}`);

/* 
Soal 6 - Naikkan Harga

Naikkan semua harga sebesar Rp1000.

Output akhir

[
  { name: "Indomie", price: 4500 },
  { name: "Teh Botol", price: 6000 },
  { name: "Aqua", price: 5000 },
]
*/
for (const product of products) {
  product.price += 1000;
  console.log(product);
}

/*
🟠 Level 3 - Nested Object
Soal 7
const students = [
  {
    name: "Andi",
    scores: [80, 90, 70],
  },
  {
    name: "Budi",
    scores: [75, 85, 95],
  },
];

Cetak seperti ini.

Andi
80
90
70

Budi
75
85
95
*/

const students = [
  {
    name: 'Andi',
    scores: [80, 90, 70],
  },
  {
    name: 'Budi',
    scores: [75, 85, 95],
  },
];

for (const student of students) {
  console.log(student.name);
  for (const score of student.scores) {
    console.log(score);
  }
}

/*
Soal 8

Data yang sama.

Tambahkan 5 poin ke seluruh nilai siswa.

Output

[
  {
    name: "Andi",
    scores: [85, 95, 75],
    },
    {
      name: "Budi",
      scores: [80, 90, 100],
      },
      ]
      */

for (const student of students) {
  console.log(student.name);
  for (const [index, score] of student.scores.entries()) {
    student.scores[index] = score + 5;
  }
  console.log(student);
}

/*
🔴 Level 4 - Mirip Project POS Kamu
Soal 9
const cart = [
  {
    name: "Indomie",
    price: 3500,
    quantity: 2,
  },
  {
    name: "Teh Botol",
    price: 5000,
    quantity: 3,
  },

Hitung subtotal.

Rumus

price × quantity

Output

22000
];
*/
const cart = [
  {
    name: 'Indomie',
    price: 3500,
    quantity: 2,
  },
  {
    name: 'Teh Botol',
    price: 5000,
    quantity: 3,
  },
];

let subtotal = 0;
for (const { price, quantity } of cart) {
  subtotal += price * quantity;
}
console.log(subtotal);

/*
Soal 10

Data sama.

Cetak seperti ini.

Indomie
Harga : Rp3500
Qty : 2
Total : Rp7000

Teh Botol
Harga : Rp5000
Qty : 3
Total : Rp15000
*/

for (const { name, price, quantity } of cart) {
  console.log(`
    ${name}
    Harga : Rp${price}
    Qty : ${quantity}
    Total : Rp${price * quantity}
    `);
}

/*
🔥 Level 5 - Challenge
Soal 11
const restaurant = {
  name: "Delano's Kitchen",
  categories: ["Italian", "Pizza", "Vegetarian"],
  starterMenu: ["Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta"],
};

Tanpa menggunakan for biasa, tampilkan

1. Italian
2. Pizza
3. Vegetarian
*/

const restaurant2 = {
  name: "Delano's Kitchen",
  categories: ['Italian', 'Pizza', 'Vegetarian'],
  starterMenu: ['Garlic Bread', 'Salad'],
  mainMenu: ['Pizza', 'Pasta'],
};

for (const [i, category] of restaurant2.categories.entries()) {
  console.log(`${i + 1}. ${category}`);
}

/*
Soal 12

Gabungkan dua menu menjadi satu.

const allMenus = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

Kemudian tampilkan

1. Garlic Bread
2. Salad
3. Pizza
4. Pasta
*/

const allMenus = [...restaurant2.starterMenu, ...restaurant2.mainMenu];

for (const [i, menu] of allMenus.entries()) {
  console.log(`${i + 1}. ${menu}`);
}
