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

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
};

/*
Challenge 1 — Weekly Opening Report (⭐⭐⭐⭐)

Buat program yang menghasilkan output berikut menggunakan object restaurant di atas.

Output:

===== WEEKLY OPENING REPORT =====

THU : Open at 12, Close at 22
FRI : Open at 11, Close at 23
SAT : Open 24 Hours
*/

//SETS : Struktur data yang digunakan untuk menyimpan sebuah iterable (array) dengan nilai unik.

const orderFood = [
  'Ayam',
  'Ikan',
  'Sapi',
  'sapi',
  'Ayam',
  'Sapi',
  'Jeruk Bali',
];

const getOrderFood = new Set(orderFood);
console.log(getOrderFood);

/* getOrderFood beriisikan dengan nilai nilai dari elemen orderFood dengan nilai unik. kita tidak bisa mengeluarkan nilai yang ada didalam sets dengan cara mengakses indexnya. tetapi kita bisa mengkonversinya menjadi sebuah array dengan spread operator dengan cara dibawah ini :
 */

// const getAllOrderFood = [...getOrderFood];
// console.log(getAllOrderFood);

/*
atau kita bisa langsung mengkonversi hasil sets tersebut ke array

const getOrderFood = [...new Set(orderFood)];
console.log(getOrderFood);

*/

//Method Method pada sets

//1. add()
getOrderFood.add('Babi');
console.log(getOrderFood);

//2. delete()
getOrderFood.delete('sapi');
console.log(getOrderFood);

//3. has()
console.log(getOrderFood.has('Ikan'));

//4. size
console.log(getOrderFood.size);
