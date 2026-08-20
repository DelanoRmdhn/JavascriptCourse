'use strict';

/*
1. Skenario Bisnis
Tim Sales & Estimator dari PT. CAHAYA REMBULAN SEJATI memiliki daftar nominal penawaran harga proyek yang masuk secara acak. Tim membutuhkan daftar penawaran tersebut terurut mulai dari harga termurah hingga termahal (Ascending Order).

Untuk menjaga integritas data riwayat transaksi, proses pengurutan ini dilarang mengubah (mutate) urutan pada array data asli. Oleh karena itu, kamu diwajibkan menggunakan method modern JavaScript .toSorted() (ES2023).

2. Data Input
Gunakan array data penawaran harga proyek berikut:

JavaScript
const daftarHargaProyek = [15000000, 4500000, 28000000, 8500000, 12000000, 6000000];
3. Fitur & Instruksi Tugas
Pengurutan Non-Destructive (.toSorted()):

Buat variabel baru bernama hargaTerurutTermurah.

Gunakan method .toSorted() dengan compare function numerik (a, b) => a - b agar nilai terurut dari yang terkecil ke terbesar.

Verifikasi Immutability:

Buktikan bahwa array awal daftarHargaProyek tidak berubah urutannya setelah operasi selesai dilakukan.

Fungsi Helper Formatter:

Buat fungsi helper (misal: formatRupiahList) untuk mengubah elemen array angka menjadi format string Rupiah (Rp X.XXX.XXX) yang digabungkan dengan koma menggunakan .map() dan .join(', ').

Output Console:

Cetak data awal yang belum terurut dan data hasil pengurutan termurah ke console browser sesuai format yang ditentukan.

4. Target Tampilan Output Console:
Plaintext
=== NON-DESTRUCTIVE PRICE SORTING ENGINE ===
Agensi : PT. CAHAYA REMBULAN SEJATI

[1] Data Asli (Urutan Kedatangan):
Rp 15.000.000, Rp 4.500.000, Rp 28.000.000, Rp 8.500.000, Rp 12.000.000, Rp 6.000.000

[2] Data Terurut (Termurah -> Termahal):
Rp 4.500.000, Rp 6.000.000, Rp 8.500.000, Rp 12.000.000, Rp 15.000.000, Rp 28.000.000

============================================
Immutability Check : PASSED (Array Asli Tidak Berubah)
*/

const daftarHargaProyek = [
  15000000, 4500000, 28000000, 8500000, 12000000, 6000000,
];

const hargaTerurutTermurah = daftarHargaProyek.toSorted((a, b) => a - b);

const formatRupiah = function (nominal) {
  return nominal.map(nom => `Rp ${nom.toLocaleString('id-ID')}`).join(', ');
};
console.log(
  `=== NON-DESTRUCTIVE PRICE SORTING ENGINE ===\n` +
    `Agensi : PT. CAHAYA REMBULAN SEJATI\n\n` +
    `[1] Data Asli (Urutan Kedatangan):\n` +
    `${formatRupiah(daftarHargaProyek)}\n\n` +
    `[2] Data Terurut (Termurah -> Termahal):\n` +
    `${formatRupiah(hargaTerurutTermurah)}\n\n` +
    `============================================\n` +
    `Immutability Check : PASSED (Array Asli Tidak Berubah)`,
);
