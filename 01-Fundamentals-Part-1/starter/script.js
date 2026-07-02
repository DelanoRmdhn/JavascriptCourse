//MINI TASK HARIAN DAY 3

//SOAL 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

*/

//Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.92;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark}) is Higher than John's BMI (${bmiJohn})! `,
  );
} else {
  console.log(
    `John's BMI (${bmiJohn}) is Higher than Mark's BMI (${bmiMark})! `,
  );
}

//TEST DATA 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark}) is Higher than John's BMI (${bmiJohn})! `,
  );
} else {
  console.log(
    `John's BMI (${bmiJohn}) is Higher than Mark's BMI (${bmiMark})! `,
  );
}

//SOAL 2

/* 
Topik: Strings, Template Literals, & if/else Statements

Studi Kasus: Sistem Otomasi Kualifikasi Klien PT. CAHAYA REMBULAN SEJATI

Skenario
Agensi Anda kedatangan seorang calon klien yang ingin berkonsultasi mengenai pembuatan website. Sistem pada database agensi Anda telah menyimpan data mentah berupa nominal anggaran yang disiapkan oleh klien tersebut.

Anda diminta untuk membangun sebuah skrip logika penentu keputusan otomatis di dalam file JavaScript. Sistem harus membaca nominal anggaran tersebut, menentukan klasifikasi produk paket mana yang paling masuk akal untuk direkomendasikan, dan menghitung sisa efisiensi anggaran klien setelah dialokasikan ke paket tersebut.

Instruksi Tugas

Siapkan variabel nilai anggaran klien (Anda bebas menguji dengan nominal angka berapa saja untuk memastikan semua kondisi logika berjalan lancar).

Buatlah sebuah sistem pengecekan kondisi terstruktur dengan ketentuan bisnis sebagai berikut:

Jika anggaran yang dimiliki klien nilainya berada di bawah 3.000.000, maka jalankan perintah untuk merekomendasikan paket Landing Page (dengan harga acuan dasar 1.500.000).

Jika anggaran yang dimiliki klien nilainya berada di angka 3.000.000 atau lebih, maka jalankan perintah untuk merekomendasikan paket Company Profile (dengan harga acuan dasar 3.000.000).

Aturan Mutlak: Seluruh teks informasi yang dicetak menuju console browser wajib disusun menggunakan sintaks Template Literals, memanfaatkan simbol backtick (``) dan placeholder ${}, tanpa ada kontaminasi operator penggabung string manual (+).

Pastikan console browser menampilkan output informasi dengan format terstruktur seperti di bawah ini:

Target Output di Console jika Anggaran di Bawah 3 Juta:

Anggaran Klien: Rp. [Nilai Budget]
Rekomendasi: Paket Landing Page (Harga Mulai: Rp. 1500000)
Sisa budget klien setelah dikurangi harga paket adalah: Rp. [Sisa Anggaran]
Target Output di Console jika Anggaran 3 Juta ke Atas:


Anggaran Klien: Rp. [Nilai Budget]
Rekomendasi: Paket Company Profile (Harga Mulai: Rp. 3000000)
Sisa budget klien setelah dikurangi harga paket adalah: Rp. [Sisa Anggaran]
*/

let anggaranKlien = 2500000;
if (anggaranKlien < 3000000) {
  console.log(
    `Anggaran Klien: Rp. [${anggaranKlien}] \nRekomendasi Paket: Paket Landing Page (Harga Mulai : Rp.1500000) \nSisa Budget Klien Setelah dikurangi harga paket adalah: Rp. [${anggaranKlien - 1500000}]`,
  );
} else if (anggaranKlien >= 3000000) {
  console.log(
    `Anggaran Klien: Rp. [${anggaranKlien}] \nRekomendasi Paket: Paket Company Profile (Harga Mulai : Rp.3000000) \nSisa Budget Klien Setelah dikurangi harga paket adalah: Rp. [${anggaranKlien - 1500000}]`,
  );
} else {
  console.log(`Anggaran Klien tidak memenuhi!`);
}
