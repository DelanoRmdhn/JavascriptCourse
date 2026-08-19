'use strict';

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, -509],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
////////////////////////////
//CARA LAIN DALAM MEMBUAT ARRAY
////////////////////////////

//1.new Array() : Digunakan untuk membuat sebuah array

//membuat sebuah array kosong dengan panjang 5
const x = new Array(5);
console.log(x);

//membuat sebuah array standar
const y = new Array(1, 2, 3, 4, 5);
console.log(y);

//2. fill() : fill digunakan untuk mengisi array dengan suatu nilai

//mengisi array kosong dengan isi berupa sebuah nilai yang sama sepanjang array
x.fill(1);
console.log(x);

//bentuk lain fill()
const movements = [100, 200, 300, 450];
console.log(movements);

movements.fill(400, -1);
console.log(movements);

movements.fill(200, 1, 3);
console.log(movements);

//3. Array.from() : adalah static method milik array yang digunakan untuk membuat array

//membuat array berdasarkan sebuah nilai
const nama = 'Delano';
const alfabet = Array.from(nama);
console.log(alfabet);

//
const nums = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(nums);

console.log(Array.from('12345', value => Number(value) * 2));
