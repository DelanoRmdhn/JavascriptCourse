'use strict';

/*
SPECIFICATION: MINI TASK
Nama Task: One-Liner Method Chaining Financial Pipeline

Topik: Functional Programming, Method Chaining (.map(), .filter(), .reduce()), & Clean Pipeline

Studi Kasus: Agregasi Total Pendapatan Bersih Proyek Prioritas PT. CAHAYA REMBULAN SEJATI

1. Skenario Bisnis
Manajemen PT. CAHAYA REMBULAN SEJATI ingin menyederhanakan kode pelaporan keuangan agar lebih deklaratif dan ringkas tanpa variabel perantara yang berulang.

Kamu diminta memproses array pendapatan kotor dari beberapa proyek sekaligus menjadi satu angka total pendapatan bersih akhir (Single Accumulated Value) menggunakan teknik Method Chaining dalam satu baris ekspresi pipa data (data pipeline).

2. Data Input
Gunakan array data pendapatan kotor berikut:

JavaScript
const pendapatanKotor = [4000000, 7500000, 5000000, 12000000, 3500000, 8000000];
3. Fitur & Instruksi Tugas
Pipeline Chaining:

Buat satu variabel bernama totalNetRevenuePrioritas.

Sambungkan ketiga array methods secara berurutan (chaining):

.map(): Potong pajak operasional sebesar 10% dari setiap pendapatan kotor (nilai * 0.9).

.filter(): Saring hanya pendapatan bersih yang lebih besar dari Rp 5.000.000 (nilai > 5000000).

.reduce(): Jumlahkan seluruh nilai yang lolos filter dengan nilai awal akumulator 0.

Fungsi Pelaporan:

Buat fungsi tampilkanLaporanRingkas() untuk mencetak hasil kalkulasi ke konsol.

Format angka akhir menggunakan format mata uang Rupiah (toLocaleString('id-ID')).

4. Target Tampilan Output Console:
Plaintext
=== FINANCIAL ONE-LINER PIPELINE ===
Agensi : PT. CAHAYA REMBULAN SEJATI

Total Net Revenue Prioritas : Rp 24.750.000
====================================
Status Pipeline: Chaining Execution Success
*/
const pendapatanKotor = [4000000, 7500000, 5000000, 12000000, 3500000, 8000000];

const totalNetRevenuePrioritas = pendapatanKotor
  .map(pendapatan => pendapatan * 0.9)
  .filter(pendapatan => pendapatan > 5000000)
  .reduce((acc, pendapatan) => acc + pendapatan, 0);

console.log(totalNetRevenuePrioritas);

const tampilkanLaporanRingkas = function () {
  console.log(
    `=== FINANCIAL ONE-LINER PIPELINE ===\n` +
      `Agensi : PT. CAHAYA REMBULAN SEJATI\n\n` +
      `Total Net Revenue Prioritas : Rp ${totalNetRevenuePrioritas.toLocaleString('id-ID')}\n` +
      `====================================\n` +
      `Status Pipeline: Chaining Execution Success`,
  );
};

tampilkanLaporanRingkas();
