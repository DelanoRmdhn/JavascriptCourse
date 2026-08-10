'use strict';

/*

Nama Task: Implementation of Higher-Order Function modifierHarga

Topik: Functional Programming, Higher-Order Functions (HOF), Array .map(), & Callback Functions

Studi Kasus: Modifikasi Massal Harga Kontrak Proyek Agensi

1. Skenario Bisnis
Tim Finansial dan Tim Sales dari PT. CAHAYA REMBULAN SEJATI sering kali perlu menyesuaikan nilai kontrak beberapa proyek sekaligus berdasarkan kondisi tertentu (misalnya penerapan promo diskon musiman, perhitungan PPN internal, atau sekadar memformat tampilan angka murni ke format mata uang Rupiah).

Untuk menghindari duplikasi kode (Don't Repeat Yourself / DRY), kamu diminta membuat sebuah Higher-Order Function (HOF) serbaguna bernama modifierHarga. Fungsi ini akan bertindak sebagai mesin pemproses utama yang menerima kumpulan harga proyek dan menerapkan aturan transformasi harga sesuai dengan fungsi callback yang dikirimkan.

2. Fitur & Instruksi Tugas
Buat Higher-Order Function (modifierHarga):

Buat fungsi modifierHarga yang menerima 2 parameter:

daftarHarga (Array berisi daftar angka harga murni).

callback (Fungsi yang bertindak sebagai transformer nilai tiap item).

Di dalam modifierHarga, manfaatkan array method bawaan JavaScript (seperti .map()) untuk memproses setiap harga murni dengan callback tersebut, lalu return array hasil operasinya.

Buat 3 Fungsi Callback Khusus:
Buat 3 fungsi callback terpisah yang akan dilempar ke dalam modifierHarga:

diskonKlienSetia: Mengalikan harga dengan 0.80 (potongan diskon 20%).

tambahPajakPPN: Mengalikan harga dengan 1.11 (penambahan PPN 11%).

formatKeRupiah: Mengubah angka murni menjadi string berformat Rupiah menggunakan .toLocaleString('id-ID') (contoh: 5000000 menjadi "Rp 5.000.000").

Inisialisasi Data & Eksekusi:

Deklarasikan array hargaAwal berisi nilai: [3000000, 5000000, 8000000].

Jalankan modifierHarga sebanyak 3x menggunakan masing-masing callback di atas secara bergantian dan simpan hasilnya di variabel terpisah.

Output Console:

Cetak seluruh log proses transformasi harga tersebut ke console browser dengan Template Literals yang rapi.

3. Target Tampilan Output Console:
Plaintext
=== FINANCIAL PRICE MODIFIER: PT. CAHAYA REMBULAN SEJATI ===

[Data Awal]
Harga Kontrak Murni : 3000000, 5000000, 8000000

[Hasil Modifikasi Callback]
1. Promo Diskon 20%  : 2400000, 4000000, 6400000
2. Setelah PPN 11%   : 3330000, 5550000, 8880000
3. Format Tampilan   : Rp 3.000.000, Rp 5.000.000, Rp 8.000.000

============================================================
Status HOF Engine   : Execution Success (Zero Duplication)
*/
const hargaAwal = [3000000, 5000000, 8000000];

const diskonKlienSetia = function (harga) {
  return harga * 0.8;
};

const tambahPajakPPN = function (harga) {
  return harga + harga * 0.11;
};

const formatKeRupiah = function (harga) {
  return `Rp ${harga.toLocaleString('id-ID')}`;
};

const modifierHarga = function (hargaDasar, callback) {
  const hasilModifikasi = [];

  for (const harga of hargaDasar) {
    const hargaBaru = callback(harga);
    hasilModifikasi.push(hargaBaru);
  }

  return hasilModifikasi;
};

const hargaDiskon = modifierHarga(hargaAwal, diskonKlienSetia);
const hargaPPN = modifierHarga(hargaAwal, tambahPajakPPN);
const hargaRupiah = modifierHarga(hargaAwal, formatKeRupiah);
console.log(hargaDiskon);

const execute = function () {
  console.log(`=== FINANCIAL PRICE MODIFIER: PT. CAHAYA REMBULAN SEJATI ===\n`);

  console.log(`[Data Awal]\nHarga Kontrak Murni : ${hargaAwal.join(', ')}\n`);

  console.log(
    `[Hasil Modifikasi Callback]\n1. Promo Diskon 20 % : ${hargaDiskon.join(', ')}\n2. Setelah PPN 11% : ${hargaPPN.join(', ')}\n3. Format Tampilan : ${hargaRupiah}`,
  );

  console.log(`============================================================`);
};

execute();
