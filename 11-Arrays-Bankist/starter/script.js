'use strict';

//MINI TASK Day 17 : manipulasi data finansial menggunakan kombinasi metode array modern .map() dan .filter().

/**
 Berikut adalah Spesifikasi Soal Praktikum Mandiri untuk Mini Task manipulasi data finansial menggunakan kombinasi metode array modern .map() dan .filter().

SPECIFICATION: MINI TASK
Nama Task: Pipeline Pemrosesan Pendapatan Bersih Proyek

Topik: Functional Array Methods, Chaining/Transformasi Data via .map(), & Penyaringan via .filter()

Studi Kasus: Evaluasi Pendapatan Bersih Agensi PT. CAHAYA REMBULAN SEJATI

1. Skenario Bisnis
Tim Finansial PT. CAHAYA REMBULAN SEJATI memiliki daftar nominal pendapatan kotor (gross revenue) dari berbagai proyek yang masuk. Setiap pendapatan kotor tersebut harus dipotong pajak penghasilan operasional sebesar 10% untuk mendapatkan pendapatan bersih (net revenue).

Setelah seluruh nilai dihitung menjadi pendapatan bersih, manajemen ingin memfilter dan hanya mengambil proyek-proyek dengan pendapatan bersih di atas Rp 5.000.000 (> 5000000) untuk dimasukkan ke dalam laporan proyek berkinerja tinggi (high-margin projects).

2. Fitur & Instruksi Tugas
Inisialisasi Data Pendapatan Kotor:

Deklarasikan array pendapatan kotor berikut:

JavaScript
const pendapatanKotor = [4000000, 7500000, 5000000, 12000000, 3500000, 8000000];
Kalkulasi Pendapatan Bersih Menggunakan .map():

Gunakan array method .map() untuk menghitung nominal pendapatan bersih setelah dipotong pajak 10% (rumus: nilai * 0.9).

Simpan hasilnya ke dalam variabel bernama pendapatanBersih.

Penyaringan Proyek Bernilai Tinggi Menggunakan .filter():

Gunakan array method .filter() pada array pendapatanBersih untuk menyaring nilai yang lebih besar dari 5.000.000 (nilai > 5000000).

Simpan hasilnya ke dalam variabel bernama proyekPrioritas.

Output Console:

Cetak data awal, hasil transformasi .map(), dan hasil penyaringan .filter() ke console browser menggunakan Template Literals dengan format Rupiah toLocaleString('id-ID').

3. Target Tampilan Output Console:
Plaintext
=== PIPELINE PENDAPATAN & PAJAK PROYEK ===
Agensi : PT. CAHAYA REMBULAN SEJATI

[1] Pendapatan Kotor Awal:
Rp 4.000.000, Rp 7.500.000, Rp 5.000.000, Rp 12.000.000, Rp 3.500.000, Rp 8.000.000

[2] Pendapatan Bersih (Setelah Potong Pajak 10%):
Rp 3.600.000, Rp 6.750.000, Rp 4.500.000, Rp 10.800.000, Rp 3.150.000, Rp 7.200.000

[3] Proyek Prioritas Bersih (> Rp 5.000.000):
Rp 6.750.000, Rp 10.800.000, Rp 7.200.000
==========================================
 */
const pendapatanKotor = [4000000, 7500000, 5000000, 12000000, 3500000, 8000000];

const pendapatanBersih = pendapatanKotor.map(
  pendapatan => pendapatan - pendapatan * 0.1,
);
console.log(pendapatanBersih);

const proyekPrioritas = pendapatanBersih.filter(
  pendapatan => pendapatan > 5000000,
);

console.log(proyekPrioritas);

const formatArrayRupiah = arr =>
  arr.map(el => `Rp ${el.toLocaleString('id-ID')}`).join(', ');

const tampilkanDaftarProyek = function (
  pendapatanKotor,
  pendapatanBersih,
  proyekPrioritas,
  format,
) {
  console.log(
    `=== PIPELINE PENDAPATAN & PAJAK PROYEK ===\n`,
    `Agensi : PT. CAHAYA REMBULAN SEJATI\n\n`,
    `[1] Pendapatan Kotor Awal :\n`,
    `${format(pendapatanKotor)}\n\n`,
    `[2] Pendapatan Bersih (Setelah Potong Pajak 10%) :\n`,
    `${format(pendapatanBersih)}\n\n`,
    `[3] Proyek Prioritas Bersih (> Rp 5.000.000) :\n`,
    `${format(proyekPrioritas)}\n`,
    `==========================================`,
  );
};
tampilkanDaftarProyek(
  pendapatanKotor,
  pendapatanBersih,
  proyekPrioritas,
  formatArrayRupiah,
);
