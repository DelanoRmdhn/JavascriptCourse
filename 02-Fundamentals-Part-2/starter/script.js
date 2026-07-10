"use strict";

/*
DAY 9 : PERULANGAN : mengulang suatu pekerjaan / tasks berkali kali tanpa menulis kode yang sama berulang ulang (DRY)

1. For Loop : for loop biasanya digunakan ketika kita tau berapa kali jumlah(n) yang ingin diulang
Bentuk For Loop = for (inisialisasi ; kondisi ; update) {}

insialisasi : buat variabel penghitung
kondisi : melakukan pengecekan kondisi, apabila true maka loop berjalan, dan apabila tidak, loop berhenti
update : bagian ini memberikan perubahan / update pada nilai penghitung setiap 1 putaran loop selesai
*/

console.log(6 % 3);

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

let hasil = "";
for (let i = 1; i <= 5; i++) {
  hasil += "#";
  console.log(hasil);
}
