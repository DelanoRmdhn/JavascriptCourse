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
  return el;
});
console.log(get2Multiply);
console.log(get3Multiply);
