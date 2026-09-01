'use strict';

//MINI CHALLANGE DAY 20

/*
Nama Task: Advanced Financial Ledger & Project Due-Date Audit Engine

Topik: Number Parsing/Checking, Math & Rounding, Remainder Operator, BigInt, Date Operations, Intl API (Number & DateTime), serta setTimeout/setInterval

Studi Kasus: Sistem Audit Transaksi & Jatuh Tempo Proyek PT. CAHAYA REMBULAN SEJATI

1. Skenario Bisnis
Sistem keuangan PT. CAHAYA REMBULAN SEJATI menerima input data transaksi dan jadwal termin proyek dalam berbagai format mentah. Tim operasional membutuhkan modul audit otomatis untuk:

Melakukan validasi angka dan pembersihan tipe data (Type Coercion/Parsing).

Menghitung pembulatan termin dan skema pembagian termin ganjil/genap menggunakan Remainder (%).

Mengelola valuasi agensi skala besar menggunakan BigInt.

Menghitung selisih hari jatuh tempo (Due Date) dengan operasi objek Date.

Memformat seluruh angka dan tanggal ke standar lokal Indonesia (id-ID) menggunakan objek Intl.

Menjalankan automated countdown/timer audit menggunakan setTimeout atau setInterval.

const auditRawData = {
  budgetInput: "  15750450.85px ",
  targetDateStr: "2026-09-15T00:00:00",
  currentDateStr: "2026-08-27T00:00:00",
  totalCorporateValuation: 9007199254740991n + 5000000000n,
  terminCount: 3
};

[1] VALIDASI & PEMBULATAN NILAI
Budget Bersih Terparsing : Rp 15.750.451,00
Status Finite Check      : VALID (Finite)

[2] STATUS TERMIN & VALUASI KORPORASI
Skema Termin (3x)        : Termin Ganjil
Valuasi Portofolio CRS   : 9007204254740991 (BigInt Verified)

[3] JATUH TEMPO & TANGGAL (Intl Formatted)
Tanggal Audit            : Kamis, 27 Agustus 2026
Batas Jatuh Tempo        : Selasa, 15 September 2026
Sisa Waktu Pelunasan     : 19 Hari Menuju Deadline

===========================================
Status Mesin Audit       : All Numbers & Dates Synchronized
*/

const auditRawData = {
  budgetInput: '  15750450.85px ',
  targetDateStr: '2026-09-15T00:00:00',
  currentDateStr: '2026-08-27T00:00:00',
  totalCorporateValuation: 9007199254740991n + 5000000000n,
  terminCount: 3,
};

const budgetBersih = Number.parseFloat(auditRawData.budgetInput);

const waktuPelunasan =
  new Date(auditRawData.targetDateStr) - new Date(auditRawData.currentDateStr);

setTimeout(() => {
  console.log(`=== SYSTEM AUDIT RUNNING (1000ms delay) ===\n`);

  console.log(
    `[1] VALIDASI & PEMBULATAN NILAI\nBudget Bersih Terparsing\t : Rp ${budgetBersih.toLocaleString('id-ID')}\n`,
    `Status Finite Check\t\t : ${Number.isFinite(budgetBersih) ? 'VALID (Finite)' : 'TIDAK VALID (Infinite)'}`,
  );

  console.log(
    `\n[2] STATUS TERMIN & VALUASI KORPORASI\n`,
    `Skema Termin ${auditRawData.terminCount}x \t\t: Termin ${auditRawData.terminCount % 2 === 0 ? 'Genap' : 'Ganjil'}\n`,
    `Valuasi Portofolio CRS : ${auditRawData.totalCorporateValuation.toString()} (BigInt Verified)`,
  );

  console.log(
    `\n[3] JATUH TEMPO & TANGGAL (Intl Formatted)\n`,
    `Tanggal Audit \t\t\t : ${new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(auditRawData.currentDateStr))}\n`,
    `Batas Jatuh Tempo \t\t : ${new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(auditRawData.targetDateStr))}\n`,
    `Sisa Waktu Pelunasan \t : ${Math.ceil(waktuPelunasan / (1000 * 60 * 60 * 24))} Hari Menuju Deadline\n\n`,
    `===========================================\n`,
    `Status Mesin Audit      : All Numbers & Dates Synchronized`,
  );
}, 1000);
