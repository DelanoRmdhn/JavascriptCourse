"use strict";

//MINI TASK MINGGU 2

/*
SOAL 3

Topik: Nested Functions, Lexical Scope, & Return Values

Studi Kasus: Sistem Pengamanan Kalkulasi Biaya Proyek PT. CAHAYA REMBULAN SEJATI

Skenario
Manajemen agensi ingin memastikan rumus perhitungan pajak PPN (11%) untuk pengerjaan website arsitek dan UMKM bersifat rahasia dan tidak bisa dimanipulasi oleh skrip luar. Kamu diminta membuat fungsi utama bernama hitungTotalBiayaProyek yang di dalamnya mengurung fungsi rahasia hitungPajak.

Instruksi Tugas
Buat Fungsi Utama (Outer Function):

Buat sebuah fungsi (boleh menggunakan Function Expression atau Arrow Function) bernama hitungTotalBiayaProyek.

Fungsi ini menerima satu parameter: hargaDasar.

Wajib memiliki Safeguard: Di baris paling atas, cek apakah hargaDasar bernilai angka positif. Jika bukan angka atau di bawah atau sama dengan 0, langsung tendang keluar (Guard Clause) dengan pesan: "Error: Harga dasar proyek tidak valid!".

Buat Fungsi Dalam (Inner Function):

Di dalam fungsi utama (tepat di bawah guard clause), deklarasikan fungsi baru bernama hitungPajak.

Fungsi hitungPajak ini tidak perlu menerima parameter baru. Dia harus memanfaatkan Lexical Scope untuk langsung mengambil nilai hargaDasar dari fungsi luar, lalu mengembalikannya setelah dikalikan dengan rate PPN murni sebesar 0.11.

Proses Akhir & Pengembalian Nilai:

Di bagian akhir fungsi utama, panggil fungsi hitungPajak() tersebut, jumlahkan hasilnya dengan hargaDasar, lalu kembalikan (return) nilai total akhir tersebut.

Uji Coba & Output Console:

Panggil fungsi utama tersebut dengan dua skenario data (Happy Path dengan angka nyata, dan Unhappy Path dengan teks/angka negatif) di dalam console.log().

Contoh target output di console browser:

Plaintext
=== SIMULASI HITUNG BIAYA PROYEK ===
Total Biaya (Landing Page 1.5jt) : Rp. 1665000
Total Biaya (Input Rusak)        : Error: Harga dasar proyek tidak valid!
*/

const hitungTotalBiayaProyek = function (hargaDasar) {
  if (isNaN(hargaDasar) || hargaDasar < 0) {
    return `Error: Harga dasar proyek tidak valid!`;
  }

  const hitungPajak = () => hargaDasar * 0.11;
  return hargaDasar + hitungPajak();
};

console.log(`=== SIMULASI HITUNG BIAYA PROYEK ===`);
console.log(
  `Total Biaya (Landing Page 1.5jt) : Rp. ${hitungTotalBiayaProyek(1500000)}`,
);
console.log(`Total Biaya (Input Rusak): ${hitungTotalBiayaProyek(-1)}`);
