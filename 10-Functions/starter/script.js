'use strict';

//MINI TASK :  Functions, Closure, Private Lexical Scope, Incremental Counter, & String Formatting

/*
SPECIFICATION: MINI TASK
Nama Task: Generator Otomatis Token ID Unik Menggunakan Closure Privat

Topik: Functions, Closure, Private Lexical Scope, Incremental Counter, & String Formatting

Studi Kasus: Sistem Auto-Generate ID Klien & Proyek Agensi

1. Skenario Bisnis
Setiap kali ada klien atau proyek baru yang masuk ke PT. CAHAYA REMBULAN SEJATI, tim operasional memerlukan ID/Token unik berformat khusus (seperti CRS-CLIENT-001, CRS-CLIENT-002, dst.).

Untuk mencegah nomor urut (counter) tereset secara tidak sengaja atau diubah secara liar dari luar oleh script lain, nilai urutan ID harus disimpan dalam Private Lexical Scope menggunakan konsep Closure.

2. Fitur & Instruksi Tugas
Buat Fungsi Generator (buatGeneratorToken):

Buat sebuah fungsi utama bernama buatGeneratorToken yang menerima 1 parameter:

prefix (String awalan kode, contoh: "CRS-CLIENT" atau "CRS-PROJ").

Di dalam fungsi ini, buat satu variabel privat:

nomorUrut (Number dengan nilai awal 0).

Fungsi buatGeneratorToken harus mengembalikan (return) sebuah Inner Function (Arrow Function / Anonymous Function).

Logika di Dalam Inner Function:

Setiap kali Inner Function dipanggil, nilai nomorUrut akan bertambah 1 (+1).

Gunakan method string .padStart(3, '0') agar nomor urut selalu tampil dalam format 3 digit angka (contoh: 1 menjadi "001", 12 menjadi "012").

Inner Function mengembalikan string token gabungan dengan format:

{prefix}-{nomorUrutPadded} (Contoh: "CRS-CLIENT-001").

Inisialisasi & Eksekusi Dua Generator Terpisah:

Buat instance generator pertama khusus Klien:

const generateIDKlien = buatGeneratorToken("CRS-CLIENT");

Buat instance generator kedua khusus Proyek:

const generateIDProyek = buatGeneratorToken("CRS-PROJ");

Panggil generateIDKlien() sebanyak 3 kali.

Panggil generateIDProyek() sebanyak 2 kali.

Output Console:

Cetak seluruh hasil pembuatan token ID tersebut ke console browser dengan Template Literals yang rapi.

3. Target Tampilan Output Console:
Plaintext
=== UNIQUE TOKEN GENERATOR: PT. CAHAYA REMBULAN SEJATI ===

[Registrasi ID Klien Baru]
Klien 1 : CRS-CLIENT-001
Klien 2 : CRS-CLIENT-002
Klien 3 : CRS-CLIENT-003

[Registrasi ID Proyek Baru]
Proyek 1 : CRS-PROJ-001
Proyek 2 : CRS-PROJ-002

============================================================
Status Generator    : Private Scope Secured (Zero Leakage)
*/

const buatGeneratorToken = function (prefix) {
  let nomorUrut = 0;
  // console.log(prefix);
  return function () {
    nomorUrut++;
    const formatted = `${prefix}-${nomorUrut.toString().padStart(3, '0')}`;

    return formatted;
  };
};

const generateIDKlien = buatGeneratorToken('CRS-CLIENT');
const generateIDProyek = buatGeneratorToken('CRS-PROJ');

const showProject = function () {
  console.log(`=== UNIQUE TOKEN GENERATOR: PT. CAHAYA REMBULAN SEJATI ===`);

  console.log(`[Registrasi ID Klien Baru]`);
  for (let i = 1; i <= 3; i++) console.log(`Klien ${i} : ${generateIDKlien()}`);

  console.log(`\n[Registrasi ID Proyek Baru]`);
  for (let i = 1; i <= 2; i++)
    console.log(`Klien ${i} : ${generateIDProyek()}`);

  console.log(`\n============================================================`);
  console.log(`Status Generator    : Private Scope Secured (Zero Leakage)`);
};

showProject();
