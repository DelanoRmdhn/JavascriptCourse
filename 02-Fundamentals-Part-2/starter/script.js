"use strict";

//MINI TASK MINGGU 2 DAY 9 : 10 SOAL WHILE LOOP

// Soal 1
// Cetak angka 1–10 menggunakan while.
let counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter++;
}

// Soal 2
// Cetak angka 10–1 menggunakan while.

counter = 10;
while (counter >= 1) {
  console.log(counter);
  counter--;
}

// Soal 3
// Cetak semua bilangan genap dari 2–20.

counter = 2;
while (counter <= 20) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}

//Soal 4
// Hitung jumlah angka 1–50.
let hasil = 0;
counter = 1;

while (counter <= 50) {
  hasil += counter;
  counter++;
}
console.log(hasil);

// Soal 5
// Hitung faktorial 6.

hasil = 1;
counter = 6;
while (counter >= 1) {
  hasil = hasil * counter;
  counter--;
}

console.log(hasil);

//Soal 6
// Cetak
// 5
// 10
// 15
// 20
// ...
// 100

counter = 5;
while (counter <= 100) {
  console.log(counter);
  counter += 5;
}

/* 
Buat countdown

10
9
8
...
Lift Off!
*/

counter = 10;
while (counter > 0) {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log(`Lift Off!`);
  }
}

/* 
Hitung banyak digit sebuah angka.

Misalnya

const angka = 123456;
Output
6

Hint:
Gunakan pembagian 10.
*/

let angka = 123456;
counter = 0;
while (angka !== 0) {
  angka = Math.floor(angka / 10);
  counter++;
}
console.log(counter);

/*
Soal 9

Balik angka.

Misalnya

12345

menjadi

54321

Hint:

Gunakan % dan Math.floor().
*/
