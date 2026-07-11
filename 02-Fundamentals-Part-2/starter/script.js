"use strict";

/*
DAY 9 : PERULANGAN : mengulang suatu pekerjaan / tasks berkali kali tanpa menulis kode yang sama berulang ulang (DRY)

WHILE LOOP : berbeda dari For Loop While loop bisa lebih fleksibel. karena dia menggunakan kondisi untuk menjalankan perulangan. yang artinya dia tidak terpaut dengan jumlah perulangan yang dibutuhkan. bisa juga digunakan apabila kita tidak mengetahui jumlah perulangan yang dibutuhkan ada berapa
*/

let dadu = Math.trunc(Math.random() * 6) + 1; //membuat angka acak dari 0-6

while (typeof dadu === "number") {
  if (dadu !== 6) {
    console.log(`Belum Beruntung! Angka yang kamu dapatkan ${dadu}`);
  }

  if (dadu === 6) {
    console.log(`Selamat kamu berhasil mendapatkan angka ${dadu}`);
    break;
  }
  dadu = Math.trunc(Math.random() * 6) + 1;
}
