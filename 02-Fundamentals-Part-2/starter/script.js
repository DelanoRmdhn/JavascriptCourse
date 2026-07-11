"use strict";

//MINI TASK MINGGU 2 DAY 9 : 10 SOAL FOR LOOP

/*
Soal 1 - Hitung 1 sampai 10

SOAL 1
Gunakan for untuk mencetak angka:

1
2
3
4
...
10
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*SOAL 2
Soal 2 - Hitung Mundur

Output:

10
9
8
...
1
*/

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/*SOAL 3
Soal 3 - Bilangan Genap

Cetak semua bilangan genap dari 2 sampai 20.

Output

2
4
6
...
20
*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*Soal 4 - Bilangan Ganjil

Cetak semua bilangan ganjil dari 1 sampai 19. */

for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*
Soal 5 - Jumlah Bilangan

Hitung jumlah angka dari 1 sampai 100.
Output
5050
*/

let angka = 0;
for (let i = 1; i <= 100; i++) {
  angka += i;
}

console.log(angka);

/*
Soal 6 - Faktorial

Hitung faktorial dari angka 5.
5! = 120
*/

let hasil = 1;
for (let i = 5; i >= 1; i--) {
  hasil = hasil * i;
}
console.log(hasil);

/*SOAL 7 Cetak semua kelipatan 3 dari 1 sampai 50. */
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

/*Soal 8 - Pangkat
Hitung
2^8
Tanpa menggunakan ** ataupun Math.pow(). */

let hasilPangkat = 1;
for (let i = 1; i <= 8; i++) {
  hasilPangkat *= 2;
}
console.log(hasilPangkat);

/*Soal 9 - Balik Hitungan

Cetak

100
90
80
70
...
0 */

for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

/*Soal 10 - FizzBuzz (Latihan Legendaris)

Cetak angka 1 sampai 30.

Aturan:

kelipatan 3 → "Fizz"
kelipatan 5 → "Buzz"
kelipatan 3 dan 5 → "FizzBuzz"
selain itu cetak angkanya.

Contoh

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
... */

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
