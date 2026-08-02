'use strict';

//LATIHAN SOAL 1 : SETS

/*
🟢 Level 1 — Dasar
Soal 1: Hilangkan Duplikasi

Diberikan array berikut:

const scores = [100, 80, 100, 70, 90, 80, 100];

Tugas:

Buat sebuah Set dari array tersebut.
Cetak hasilnya.
Cetak jumlah nilai uniknya
*/
const scores = [100, 80, 100, 70, 90, 80, 100];
const getScore = new Set(scores);
console.log(getScore, getScore.size);

/*
Soal 2: Tambah dan Hapus

Buat Set yang berisi:

HTML
CSS
JavaScript

Lalu:

Tambahkan "React"
Tambahkan "Node.js"
Hapus "CSS"
Cetak hasil akhirnya.
*/

const mySkill = new Set(['HTML', 'CSS', 'JavaScript']);
mySkill.add('React');
mySkill.add('Node.js');
mySkill.delete('CSS');
console.log(mySkill);

/*
Soal 3: Mengecek Data
const fruits = new Set([
  "Apple",
  "Banana",
  "Orange",
  "Mango"
]);

Tugas:

Cek apakah "Banana" ada.
Cek apakah "Durian" ada.
*/

const fruits = new Set(['Apple', 'Banana', 'Orange', 'Mango']);

console.log(fruits.has('Banana'));
console.log(fruits.has('Durian'));

/*
🟡 Level 2 — Looping
Soal 4: Cetak Semua Elemen
const cities = new Set([
  "Bandung",
  "Jakarta",
  "Surabaya",
  "Medan"
]);
*/

const cities = new Set(['Bandung', 'Jakarta', 'Surabaya', 'Medan']);
for (const city of cities) {
  console.log(`City : ${city}`);
}

/*
Soal 5: Mengubah Semua Huruf Menjadi Kapital
const animals = new Set([
  "cat",
  "dog",
  "bird",
  "lion"
]);

Output yang diinginkan:

CAT
DOG
BIRD
LION
*/

const animals = new Set(['cat', 'dog', 'bird', 'lion']);
for (const animal of animals) console.log(animal.toUpperCase());

/*
🟠 Level 3 — Operasi Set
Soal 6: Union
const frontend = new Set([
  "HTML",
  "CSS",
  "JavaScript"
]);

const backend = new Set([
  "JavaScript",
  "Node.js",
  "Express"
]);

Buat Set baru yang berisi gabungan keduanya tanpa duplikasi.
*/
const frontend = new Set(['HTML', 'CSS', 'JavaScript']);

const backend = new Set(['JavaScript', 'Node.js', 'Express']);

const myTechStack = frontend.union(backend);
console.log(myTechStack);

/*
Soal 7: Intersection

Gunakan data yang sama.

Buat Set baru yang hanya berisi skill yang dimiliki kedua Set.

Output:

Set { "JavaScript" }
*/
console.log(frontend.intersection(backend));

/*
Soal 8: Difference

Gunakan data yang sama.

Cari skill yang hanya dimiliki frontend.

Output:

Set {
  "HTML",
  "CSS"
}
*/

console.log(frontend.difference(backend));

/*
🔴 Level 4 — Studi Kasus
Soal 9: Sistem Login

Buat Set kosong.

Tambahkan user berikut:

Delano
Rangga
Fadhil

Lalu lakukan pengecekan:

Apakah "Delano" sudah login?
Apakah "Adit" sudah login?
*/

const user = new Set([]);
user.add('Delano');
user.add('Rangga');
user.add('Fadhil');
// console.log(user);
console.log(user.has('Delano'));
console.log(user.has('Adit'));

/*
Soal 10: Event Peserta
const participants = [
  "Delano",
  "Rangga",
  "Delano",
  "Fadhil",
  "Rangga",
  "Andi",
  "Delano"
];

Tugas:

Hilangkan peserta yang duplikat.
Cetak jumlah peserta unik.
Cetak seluruh peserta unik menggunakan for...of.
*/

const participants = [
  'Delano',
  'Rangga',
  'Delano',
  'Fadhil',
  'Rangga',
  'Andi',
  'Delano',
];

const participantsNoDuplicate = new Set(participants);
// console.log(participantsNoDuplicate);
for (const participant of participantsNoDuplicate) console.log(participant);

/*
Misalkan terdapat dua restoran.

const restaurantA = new Set([
  "Pizza",
  "Pasta",
  "Burger",
  "Salad"
]);

const restaurantB = new Set([
  "Burger",
  "Steak",
  "Pizza",
  "Soup"
]);

Buatlah:

Menu gabungan kedua restoran.
Menu yang sama-sama dimiliki kedua restoran.
Menu yang hanya dimiliki Restaurant A.
Menu yang hanya dimiliki Restaurant B.
Cetak semua menu secara alfabet menggunakan sort() (ingat, Set harus diubah menjadi array terlebih dahulu).
*/

const restaurantA = new Set(['Pizza', 'Pasta', 'Burger', 'Salad']);

const restaurantB = new Set(['Burger', 'Steak', 'Pizza', 'Soup']);

const allMenu = restaurantA.union(restaurantB);
console.log(allMenu);

const sameMenu = restaurantA.intersection(restaurantB);
console.log(sameMenu);

const uniqueRestaurantA = restaurantA.difference(restaurantB);
console.log(uniqueRestaurantA);

const uniqueRestaurantB = restaurantB.difference(restaurantA);
console.log(uniqueRestaurantB);
