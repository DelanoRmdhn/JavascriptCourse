"use strict";

/*
DAY 9 : PERULANGAN : mengulang suatu pekerjaan / tasks berkali kali tanpa menulis kode yang sama berulang ulang (DRY)

1. For Loop : for loop biasanya digunakan ketika kita tau berapa kali jumlah(n) yang ingin diulang
Bentuk For Loop = for (inisialisasi ; kondisi ; update) {}

insialisasi : buat variabel penghitung
kondisi : melakukan pengecekan kondisi, apabila true maka loop berjalan, dan apabila tidak, loop berhenti
update : bagian ini memberikan perubahan / update pada nilai penghitung setiap 1 putaran loop selesai

For Loop pada array bisa kita gunakan untuk mengakses atau memproses setiap elemen pada array secara berurutan menggunakan indeksnya.
*/

const tahunKelahiran = [2006, 1976, 2009, 2017, 1983];
const usia = [];
for (let i = 0; i < tahunKelahiran.length; i++) {
  if (typeof tahunKelahiran[i] !== "number") continue; //continue : melanjutkan ke perulangan selanjutnya apabila kondisi benar
  usia.push(2026 - tahunKelahiran[i]);
}

console.log(usia);

for (let i = 0; i < tahunKelahiran.length; i++) {
  usia[i] = 2026 - tahunKelahiran[i];
  console.log(usia[i]);
  if (typeof tahunKelahiran[i] === "number") break; //break : menghentikan seluruh perulangan apabila kondisi benar
}
