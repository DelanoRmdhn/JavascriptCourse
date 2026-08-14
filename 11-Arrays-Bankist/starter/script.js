'use strict';

//4. ARRAY METHOD : 1. MAP
/*
Map adalah array method yang digunakan untuk menghasilkan sebuah array baru dengan cara menjalankan sebuah callback terhadap sebuah elemen array asal.

Map digunakan ketika ingin mengambil setiap elemen dari sebuah array, melakukan suatu transformasi terhadap elemen tersebut, lalu mengimpilkan hasil transformasi tersebut menjadi array baru.

*/

const numbers = [10, 20, 30, 40, 50];

const timesTwo = function (el) {
  return el * 2;
};

const get2Multiply = numbers.map(timesTwo);
const get3Multiply = numbers.map(function (el, i) {
  //argumennya mirip dengan forEach
  console.log(`${i + 1} : ${el * 3}`);
  return el * 3;
});
console.log(get2Multiply);
console.log(get3Multiply);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const convertToUsd = function (currencies) {
  const eurToUsd = 1.1;

  const value = currencies.map(el => el * 1.1);
  return value;
};

const usd = convertToUsd(movements);
console.log(usd);

const soal1 = function () {
  const numbers = [2, 4, 6, 8, 10];

  const doubledNumbers = numbers.map(function (el) {
    return el * 2;
  });

  console.log(`Bentuk Asli : ${numbers}`);
  console.log(doubledNumbers);
};

soal1();

const soal2 = function () {
  const numbers = [10, 20, 30, 40];

  const convertToString = numbers.map(function (num) {
    return String(num);
  });

  console.log(`Bentuk Asli : ${numbers}`);
  console.log(convertToString);
};

soal2();

const soal3 = function () {
  const names = ['Delano', 'Rangga', 'Fadhil', 'Zia'];

  const totalChar = names.map(function (el) {
    return el.length;
  });

  console.log(totalChar);
};

soal3();

const soal4 = function () {
  const names = ['delano', 'rangga', 'fadhil', 'zia'];

  const uppercaseNames = names.map(function (el) {
    return el.toUpperCase();
  });

  console.log(uppercaseNames);
};

soal4();

const soal5 = function () {
  const names = ['Jonas Schmedtmann', 'Delano Ramadhan', 'John Doe'];

  const username = names.map(function (name) {
    return (
      name.slice(0, 1).toLowerCase() +
      name.charAt(name.indexOf(' ') + 1).toLowerCase()
    );
  });

  console.log(username);
};

soal5();

const soal6 = function () {
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 },
  ];

  const productsWithDiscount = products.map(function ({ name, price }) {
    return {
      name,
      price,
      discount: price * 0.1,
    };
  });

  console.log(productsWithDiscount);
};

soal6();

const soal7 = function () {
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 },
  ];

  const products2 = products.map(function ({ name, price }) {
    return {
      name,
      finalPrice: price - price * 0.1,
    };
  });

  console.log(products2);
};

soal7();

const soal8 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000],
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790],
    },
    {
      owner: 'Steven Thomas',
      movements: [200, -200, 340, -300],
    },
  ];

  const ownerName = accounts.map(function ({ owner }) {
    return owner;
  });

  console.log(ownerName);
};

soal8();

const soal9 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000],
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790],
    },
    {
      owner: 'Steven Thomas',
      movements: [200, -200, 340, -300],
    },
  ];

  const accountsTransaction = accounts.map(function ({ movements }) {
    return movements.length;
  });

  console.log(accountsTransaction);
};

soal9();

const soal10 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000],
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790],
    },
    {
      owner: 'Steven Thomas',
      movements: [200, -200, 340, -300],
    },
  ];

  const usernames = accounts.map(function ({ owner }) {
    const [firstName, lastName] = owner.split(' ');

    return firstName.charAt(0).toLowerCase() + lastName.charAt(0).toLowerCase();
  });

  console.log(usernames);
};

soal10();

const soal11 = function () {
  const transactions = [
    { type: 'deposit', amount: 200 },
    { type: 'withdrawal', amount: 100 },
    { type: 'deposit', amount: 500 },
    { type: 'withdrawal', amount: 50 },
  ];

  const transactionsInformations = transactions.map(function ({
    type,
    amount,
  }) {
    return `${type} : ${amount}`;
  });

  console.log(transactionsInformations);
};

soal11();

const soal12 = function () {
  const transactions = [
    { type: 'deposit', amount: 200 },
    { type: 'withdrawal', amount: 100 },
    { type: 'deposit', amount: 500 },
    { type: 'withdrawal', amount: 50 },
  ];

  const formattedTransaction = transactions.map(function ({ type, amount }) {
    return {
      type,
      amount,
      message: `You ${type === 'deposit' ? 'Deposited' : 'Withdrew'} ${amount}`,
    };
  });

  console.log(formattedTransaction);
};

soal12();

const soal13 = function () {
  const menu = [
    {
      name: 'Pizza',
      price: 12,
      category: 'Food',
    },
    {
      name: 'Burger',
      price: 10,
      category: 'Food',
    },
    {
      name: 'Cola',
      price: 3,
      category: 'Drink',
    },
  ];

  const menuCatalog = menu.map(function ({ name, price }) {
    return `${name} - ${price}`;
  });

  console.log(menuCatalog);
};

soal13();

const soal14 = function () {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 15000000,
    },
    {
      id: 2,
      name: 'Mouse',
      price: 500000,
    },
    {
      id: 3,
      name: 'Keyboard',
      price: 1000000,
    },
  ];

  const productsFormattedPrice = products.map(function ({ id, name, price }) {
    return {
      id,
      name,
      price: `Rp ${price.toLocaleString('id-ID')}`,
    };
  });

  console.log(productsFormattedPrice);
};

soal14();

const soal15 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      pin: 1111,
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      pin: 2222,
    },
    {
      owner: 'Steven Thomas',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      pin: 3333,
    },
  ];

  const accountSummaries = accounts.map(function ({ owner, movements, pin }) {
    const [firstName, lastName] = owner.split(' ');
    return {
      username:
        firstName.charAt(0).toLowerCase() + lastName.charAt(0).toLowerCase(),
      pin,
      movementsCount: movements.length,
    };
  });

  console.log(accountSummaries);
};

soal15();
