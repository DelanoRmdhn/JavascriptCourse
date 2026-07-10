"use strict";

/*
DAY 9 : PERULANGAN : mengulang suatu pekerjaan / tasks berkali kali tanpa menulis kode yang sama berulang ulang (DRY)

1. For Loop : for loop biasanya digunakan ketika kita tau berapa kali jumlah(n) yang ingin diulang
Bentuk For Loop = for (inisialisasi ; kondisi ; update) {}

insialisasi : buat variabel penghitung
kondisi : melakukan pengecekan kondisi, apabila true maka loop berjalan, dan apabila tidak, loop berhenti
update : bagian ini memberikan perubahan / update pada nilai penghitung setiap 1 putaran loop selesai

For Loop pada array bisa kita gunakan untuk mengakses atau memproses setiap elemen pada array secara berurutan menggunakan indeksnya.

NESTED LOOP : Pada nested loop, setiap kali loop luar melakukan satu iterasi, loop dalam akan dijalankan sampai selesai terlebih dahulu. Setelah loop dalam selesai, barulah loop luar melanjutkan ke iterasi berikutnya.
*/

for (let i = 1; i <= 3; i++) {
  console.log(`Perulangan Luar ke-${i}`);
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

//SORTING ANGKA DARI KECIL KE BESAR
const angka = [7, 9, 3, 5, 1];
let temp;

for (let i = 0; i < angka.length; i++) {
  for (let j = i + 1; j < angka.length; j++) {
    if (angka[i] > angka[j]) {
      // console.log(angka[i], angka[j]);
      temp = angka[j];
      angka[j] = angka[i];
      angka[i] = temp;
    }
  }
}

console.log(angka);

/*
Gunakan nested loop untuk menghasilkan:

*
**
***
****
*****
*/

for (let i = 1; i <= 5; i++) {
  let bintang = "";
  for (let j = 0; j < i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}

for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 1; j <= 5; j++) {
    angka += i;
  }

  console.log(angka);
}

for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 1; j <= 5; j++) {
    angka += j;
  }
  console.log(angka);
}

for (let i = 1; i <= 5; i++) {
  let angka = "";

  for (let j = 1; j <= i; j++) {
    angka += j;
  }

  console.log(angka);
}
