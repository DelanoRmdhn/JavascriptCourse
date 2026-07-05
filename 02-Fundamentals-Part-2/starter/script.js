"use strict";

/*

FUNCTION : 
Adalah sebuah blok kode yang dapat dipanggil kembali untuk melakukan tugas tertentu.
Function dapat menerima input (parameter) dan dapat mengembalikan output (return value).

JENIS JENIS FUNCTION : 
1. Function Declaration = Function Declaration adalah function yang dideklarasikan secara langsung menggunakan keyword function, tanpa perlu disimpan ke dalam variabel. Bentuk ini merupakan sebuah declaration statement.

2. Function Expression = Function Expression adalah function yang dibuat sebagai sebuah expression (value), kemudian expression tersebut disimpan ke dalam sebuah variabel. Keseluruhan const namaFunction = ... merupakan sebuah statement.

3. Arrow Function = Mirip seperti Function Expression, bahkan bisa dikatakan sama namun memiliki beberapa kelebihan dan kekurangan dibandingnkan dengna Function Expression.

*/

//1 FUNCTION DECLARATION
function sapa(nama) {
  const sapaSaya = `Halo semuanya! nama saya ${nama}`;
  return sapaSaya;
}

console.log(sapa("Delano"));

//2 FUNCTION EXPRESSION
const tambahNilai = function (a, b) {
  return a + b;
};

console.log(tambahNilai(10, 5));

// 3 MEMANGGIL FUNCTION DI DALAM FUNCTION
function hitungUsia(tahunLahir, tahunSaatIni) {
  const kalkulasi = tahunSaatIni - tahunLahir;
  console.log(`${sapa("Delano")}, saat ini saya berusia ${kalkulasi} tahun!`);

  /*
  Pemanggilan function (sapa("Delano")) adalah sebuah Call Expression. yang menghasilkan sebuah value, sehingga dapat digunakan di dalam template literal, variabel, operasi, maupun argument function lain.
*/
}

hitungUsia(2006, 2026);

/* 
PERBEDAAN ANTARA FUNCTION DECLARATION & FUNCTION EXPRESSION

DECLARATION : 
1. cara penulisan = function namaFunction(parameter){...}
2. hoisting = meskipun function ini bisa tetap dijalankan sebelum di deklarasikan
3. penamaan = memiliki nama function

EXPRESSION : 
1. cara penulisan = const namaVariable = function(parameter) {...}
2. hoisting = tidak berlaku disini (lebih strict)
3. penamaan = function tidak memiliki nama(anonymous function), tetapi yang memiliki nama adalah si variabel yang menyimpan function tersebut.


ARROW : 
1. cara penulisan = const namaVariabel = (parameter) => ... / const namaVariabel = (parameter) => {}
2. hoisting = sama seperti function expression
3. penamaan = sama seperti function expression

perbedaannya dari function expression = 
1. tidak memiliki this. dalam kata lain dia ngambil this dari scope / lingkungan di sekitarnya
2. tidak bisa menjadi constructor
3. tidak punya arguments
4. implicit return = const namaVariable = (parameter) => .... -> return otomatis 

*/

//2. hoisting :
console.log(calcAge(2006));
function calcAge(tahunLahir) {
  return `umur saya : ${2026 - tahunLahir}`;
}

//3 ARROW FUNCTION
const kapanPensiun1 = (umur, nama) =>
  `${65 - umur} tahun sebelum kamu pensiun, ${nama}!`; //bentuk implisit

const kapanPensiun2 = (umur, nama) => {
  const hitung = 65 - umur; // bentuk non implisit
  return `${hitung} tahun sebelum kamu pensiun, ${nama}!`;
};

console.log(kapanPensiun1(20, "Delano"));
console.log(kapanPensiun2(20, "Delano"));
