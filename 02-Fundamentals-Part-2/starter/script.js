"use strict";

//MINI TASK MINGGU 2

/* 
SOAL 1 

Topik: Function Expressions, Arrow Functions, & Advance Input Safeguard

Studi Kasus: Modul Kurs Valuta Asing Pembayaran Internasional Agen

Skenario
Agensi Anda sedang menjajaki kerja sama dengan firma arsitektur asal Singapura yang memberikan penawaran anggaran dalam bentuk USD (United States Dollar). Untuk menyamakan pembukuan keuangan internal agensi, tim keuangan membutuhkan sebuah fungsi utilitas yang bisa mengubah nominal USD tersebut ke dalam IDR (Rupiah) secara instan.

Sebagai Software Engineer, Anda diminta untuk membuat dua versi fungsi konversi dengan ketentuan nilai kurs tetap (fixed rate) yaitu: 1 USD = Rp15.500.

Instruksi Tugas
Fungsi Pertama (Gaya Function Expression):

Buat sebuah fungsi bernama konversiKeIdrExpression menggunakan gaya Function Expression.

Fungsi ini menerima satu parameter yaitu nominalUsd.

Wajib memiliki Safeguard: Di dalam fungsi, cek apakah input yang dimasukkan benar-benar sebuah angka dan bernilai positif (lebih besar dari 0). Jika input bukan angka (seperti teks atau NaN) atau bernilai 0 ke bawah, fungsi harus langsung mengembalikan teks pesan error: "Input USD harus berupa angka positif!".

Fungsi Kedua (Gaya Arrow Function):

Buat sebuah fungsi bernama konversiKeIdrArrow menggunakan gaya Arrow Function.

Fungsi ini memiliki tugas dan struktur safeguard yang sama persis dengan fungsi pertama, namun ditulis total menggunakan sintaks modern tanda panah (=>).

Uji Coba & Output Console:

Lakukan pemanggilan kedua fungsi tersebut di bagian bawah kode Anda menggunakan Template Literals.

Lakukan uji stres (stress test) pada fungsi Anda dengan menguji dua kondisi: data yang benar (Happy Path) dan data yang salah (Unhappy Path/Edge Case).

Contoh target output di console browser jika kodenya berhasil:

Plaintext
=== PENGUJIAN KURS EXPRESSION ===
Input: 100 USD  -> Hasil: Rp. 1550000
Input: "seratus" -> Hasil: Input USD harus berupa angka positif!

=== PENGUJIAN KURS ARROW ===
Input: 250 USD  -> Hasil: Rp. 3875000
Input: -50 USD  -> Hasil: Input USD harus berupa angka positif!
💡 Tembok Pertahanan Kunci (Tips Tipis):

Gunakan fungsi bawaan JavaScript isNaN(variabel) di dalam gerbang safeguard-mu untuk mendeteksi apakah input dari user itu bukan angka atau bukan.
*/

//FUNCTION EXPRPESSION
const konversiKeIdrExpression = function (nominalUsd) {
  /*Melakukan pengecekan berupa : 
  1. input benar benar sebuah angka ✅
  2. angka harus positif ✅
  3. Jika input bukan angka (seperti teks atau NaN) atau bernilai 0 ke bawah, fungsi harus langsung mengembalikan teks pesan error: "Input USD harus berupa angka positif!"
  */

  if (isNaN(nominalUsd) || nominalUsd <= 0) {
    return `Input USD harus berupa angka positif!`;
  }
  return nominalUsd * 15500;
};

//ARROW FUNCTION
const konversiKeIdrArrow = (nominalUsd) => {
  if (isNaN(nominalUsd) || nominalUsd <= 0) {
    return `Input USD harus berupa angka positif!`;
  }
  return nominalUsd * 15500;
};

//TESTING FUNCTION

const testingExpressionFunction = function (nominal) {
  console.log(`=== PENGUJIAN KURS EXPRESSION ===`);
  console.log(`Input : ${nominal}`);
  console.log(`Hasil Konversi : ${konversiKeIdrExpression(nominal)}`);
};

const testingArrowFunction = (nominal) => {
  console.log(`=== PENGUJIAN KURS ARROW ===`);
  console.log(`Input : ${nominal}`);
  console.log(`Hasil Konversi : ${konversiKeIdrArrow(nominal)}`);
};

//TESTING
testingExpressionFunction(100);
testingArrowFunction(25);
testingArrowFunction(-100);
testingArrowFunction(-25);
testingArrowFunction("haloooo");
