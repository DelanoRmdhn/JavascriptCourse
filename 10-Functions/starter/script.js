'use strict';

//LATIHAN SOAL CLOSURE

/*
Soal 1 — setTimeout

Buat function:

const hitungMundur = function (nama, waktu) {
  // ...
};

hitungMundur('Delano', 3);

Function tersebut harus menghasilkan:

Persiapan untuk Delano...

kemudian 3 detik kemudian:

Delano, waktunya habis!
Syarat

Gunakan setTimeout.

Dan jangan menggunakan global variable.

Pertanyaan penting:

Setelah kamu membuatnya, jelaskan:

Di mana closure terjadi dan variabel apa yang "diingat" oleh callback?
*/

const hitungMundur = function (nama, waktu) {
  setTimeout(function () {
    console.log(`${nama} Waktunya Habis!`);
  }, waktu * 1000);
  console.log(`Persiapan untuk ${nama}...`);
};

// hitungMundur('Delano', 3);

/*
Penjelasan :
closure terjadi pada function callback milik setTimeout, dimana nama yang merupakan variable yang diingat oleh callback karena dipanggil setelah function hitungMundur sudah keluar dari execution context.
*/

/*
🟢 Level 2 — Closure Tanpa return function
Soal 2 — Sistem Boarding

Buat:

const boarding = function (passengers, wait) {
  // ...
};

Contoh:

boarding(180, 3);

Output:

We will start boarding in 3 seconds.

Lalu setelah 3 detik:

We are now boarding 180 passengers.
Tambahan

Di dalam function buat:

const groups = passengers / 3;

Kemudian callback harus mencetak:

Each group contains 60 passengers.
Pertanyaan:
Apakah terjadi closure?
Function mana yang menjadi closure?
Variabel apa saja yang diakses dari outer scope?
Kenapa variabel tersebut masih bisa digunakan setelah boarding() selesai?
*/

const boarding = function (passengers, wait) {
  console.log(`We Will Start Boarding in ${wait} Seconds.`);
  setTimeout(function () {
    const groups = passengers / 3;

    console.log(`We Are Boarding ${passengers} passengers.`);
    console.log(`Each Group Contains ${groups} passengers.`);
  }, wait * 1000);
};

// boarding(180, 3);

/*
JAWAB : 
1. iya closure terjadi
2. function callback milik function setTimeout
3. variable passenger merupakan function yang diakses dari outer scope
4. karena closure memungkinkan hal ini untuk terjadi
*/

/*
🟡 Level 3 — Closure + Loop

Nah, ini mulai menarik.

Soal 3

Perhatikan kode:

const buatPengumuman = function () {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(`Pengumuman ke-${i}`);
    }, i * 1000);
  }
};

buatPengumuman();

Tugasmu:

A. Prediksi output

Sebelum menjalankan kode, tulis:

...
...
...

dan kapan masing-masing output muncul.

B. Jelaskan closure

Jawab:

Kenapa callback setTimeout bisa mengetahui nilai i?

C. Tantangan tambahan

Ubah let i menjadi:

var i

Kemudian prediksi lagi outputnya.
*/

const buatPengumuman = function () {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(`Pengumuman ke-${i}`);
    }, i * 1000);
  }
};

// buatPengumuman();
/*
Penjelasan Closure : 
jadi terdapat sebuah perulangan for sebanyak 3x. dan didalam perulangan tersebut terdapat sebuah function setTimeout yang akan menampilkan output berupa `Pengumuman ke-${i}` dan variable i disini merupakan variable yang dapat diakses oleh callback. ini bisa terjadi karena closure. yang memungkinkan callback dalam menggunakan variable i.
*/

/*
jawaban kalo diubah menjadi var i. jujur saya gatau hehe

*/

/*
🟡 Level 4 — Closure + Data Pribadi

Sekarang kita masuk ke penggunaan closure yang lebih realistis.

Soal 4 — Saldo Rekening

Buat:

const buatRekening = function (saldoAwal) {
  // ...
};

Kemudian:

const rekeningSaya = buatRekening(1_000_000);

Function tersebut harus memiliki kemampuan:

rekeningSaya.cekSaldo();
rekeningSaya.deposit(500_000);
rekeningSaya.tarik(200_000);

Sehingga:

rekeningSaya.cekSaldo(); // 1.000.000

rekeningSaya.deposit(500_000);

rekeningSaya.cekSaldo(); // 1.500.000

rekeningSaya.tarik(200_000);

rekeningSaya.cekSaldo(); // 1.300.000
Syarat penting:

saldo tidak boleh bisa diakses langsung dari luar.

Jadi ini harus gagal:

rekeningSaya.saldo;

Kenapa?

Karena saldo harus menjadi private variable melalui closure.
*/

const buatRekening = function (saldoAwal) {
  let saldo = saldoAwal;

  return {
    cekSaldo() {
      console.log(`Saldo Anda : Rp.${saldo}`);
    },

    deposit(jumlahDeposit) {
      saldo += jumlahDeposit;
      this.cekSaldo();
    },

    tarik(jumlahPenarikan) {
      saldo -= jumlahPenarikan;
      this.cekSaldo();
    },
  };
};

const rekeningSaya = buatRekening(1_000_000);
rekeningSaya.cekSaldo();
rekeningSaya.deposit(500_000);
rekeningSaya.tarik(200_000);
console.log(rekeningSaya.saldo); //undefined

/*
🔴 Level 5 — Bedakan Closure dan Bukan Closure

Untuk setiap kode berikut, jawab:

Closure atau bukan? Jelaskan alasannya.

A
const nama = 'Delano';

function sapa() {
  console.log(nama);
}

sapa();
B
function buatSapa() {
  const nama = 'Delano';

  return function () {
    console.log(nama);
  };
}

const sapa = buatSapa();

sapa();
C
function sapa(nama) {
  console.log(nama);
}

sapa('Delano');
D
function mulai() {
  const nama = 'Delano';

  setTimeout(function () {
    console.log(nama);
  }, 1000);
}

mulai();
E
const nama = 'Delano';

setTimeout(function () {
  console.log(nama);
}, 1000);
*/

/*
A : BUKAN CLOSURE.
B : CLOSURE
C : BUKAN CLOSURE.
D : CLOSURE
E : BUKAN CLOSURE
*/

/*
🔥 Boss Fight — Gabungan Semuanya

Kalau Level 1–5 sudah kamu kuasai, kerjakan ini:

const buatCounter = function (nama) {
  let jumlah = 0;

  return function () {
    jumlah++;
    console.log(`${nama} sudah menjalankan counter ${jumlah} kali`);
  };
};

Gunakan:

const counterDelano = buatCounter('Delano');
const counterBudi = buatCounter('Budi');

counterDelano();
counterDelano();
counterDelano();

counterBudi();
counterBudi();

Prediksi outputnya.

Lalu jawab tanpa menjalankan kode:

Kenapa counterDelano dan counterBudi punya jumlah yang berbeda?
Berapa nilai jumlah milik Delano?
Berapa nilai jumlah milik Budi?
Apakah buatCounter() masih berjalan ketika counterDelano() dipanggil?
Kalau tidak, bagaimana counterDelano masih bisa mengakses jumlah?
*/

const buatCounter = function (nama) {
  let jumlah = 0;

  return function () {
    jumlah++;
    console.log(`${nama} sudah menjalankan counter ${jumlah} kali`);
  };
};

const counterDelano = buatCounter('Delano');
const counterBudi = buatCounter('Budi');

counterDelano();
counterDelano();
counterDelano();

counterBudi();
counterBudi();

/* 
prediksi output : 
1
Delano sudah menjalankan counter 1 kali
2
Delano sudah menjalankan counter 2 kali
3
Delano sudah menjalankan counter 3 kali
1
Budi sudah menjalankan counter 1 kali
2
Budi sudah menjalankan counter 2 kali

Lalu jawab tanpa menjalankan kode:

Kenapa counterDelano dan counterBudi punya jumlah yang berbeda?
karena counterDelano dijalankan 3x sedangkan counterBudi dijalankan 2x

Berapa nilai jumlah milik Delano?
3

Berapa nilai jumlah milik Budi?
2
Apakah buatCounter() masih berjalan ketika counterDelano() dipanggil?
tidak, dia sudah berhenti tetapi variable jumlah dan nama masih bisa diakses oleh counterDelano akibat closure.

Kalau tidak, bagaimana counterDelano masih bisa mengakses jumlah?
dengan closure.
*/
