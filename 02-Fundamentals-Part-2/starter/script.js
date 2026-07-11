"use strict";

//MINI TASK STUDI KASUS SOAL 2

/*
SOAL PRAKTIKUM MANDIRI - MINGGU 2
Topik: for Loop, continue Statement, & Array Iteration

Studi Kasus: Sistem Filter Proyek Prioritas Utama PT. CAHAYA REMBULAN SEJATI

Skenario
Agensi Anda sedang menangani banyak antrean proyek masuk dari berbagai UMKM. Karena keterbatasan sumber daya tim PSDM dan developer di bulan ini, manajemen memutuskan untuk memprioritaskan proyek-proyek bernilai besar terlebih dahulu, yaitu proyek yang nilainya di atas Rp4.000.000 (lebih dari 4 juta).

Anda diminta membuat sistem filter otomatis menggunakan perulangan. Jika nilai proyek tidak memenuhi syarat (kurang dari atau sama dengan 4 juta), perulangan harus langsung melewati (skip) data tersebut dan lanjut memeriksa proyek berikutnya.

Instruksi Tugas
Inisialisasi Data Array:

Buatlah sebuah array bernama daftarHargaProyek.


Isi array tersebut dengan nominal angka murni berikut: 1500000, 5000000, 3000000, 8000000, 4000000, dan 6500000.

Perulangan dan Penyaringan (Looping & Filtering):

Lakukan perulangan menggunakan for loop tradisional untuk menjelajahi setiap elemen di dalam array daftarHargaProyek.

Wajib menggunakan continue: Di dalam blok perulangan, buatlah sebuah kondisi pengondisian (if). Jika harga proyek bernilai kurang dari atau sama dengan 4.000.000, maka picu kata kunci continue agar sistem langsung melompati angka tersebut.

Di bawah baris kode continue tersebut (jalur aman/lolos seleksi), cetak nilai harga proyek yang berhasil lolos ke console menggunakan console.log() dan Template Literals.

Output Console:

Cetak header informasi penyaringan yang rapi ke console.

Pastikan hanya angka yang bernilai murni lebih dari 4.000.000 saja yang tercetak di console.

Target Tampilan Output Console:
Plaintext
=== DAFTAR PROYEK PRIORITAS (> 4 JUTA) ===
Proyek Lolos: Rp. 5000000
Proyek Lolos: Rp. 8000000
Proyek Lolos: Rp. 6500000
*/

const daftarHargaProyek = [
  1500000, 5000000, 3000000, 8000000, 4000000, 6500000,
];
console.log(`=== DAFTAR PROYEK PRIORITAS (> 4 JUTA) ===`);
for (let i = 0; i < daftarHargaProyek.length; i++) {
  if (daftarHargaProyek[i] <= 4000000) continue;

  console.log(`Proyek Lolos : Rp. ${daftarHargaProyek[i]}`);
}
