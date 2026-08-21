'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/*
🧠 Challenge 1 — Bank Transaction Analyzer

Diberikan data transaksi berikut:

const transactions = [
  '1000',
  '-250.50',
  '300',
  'invalid',
  '450.75',
  '-100',
  '2000',
];

Buat program yang:

Mengubah seluruh nilai transaksi yang valid menjadi Number.
Mengabaikan transaksi yang bukan angka.
Menghitung:
total transaksi
rata-rata transaksi
transaksi terbesar
transaksi terkecil
Tampilkan hasil rata-rata dengan 2 angka di belakang koma.

Contoh output:

Total       : 3400.25
Average     : 566.71
Max         : 2000
Min         : -250.50
Constraint

Gunakan materi yang baru kamu pelajari:

Number()
Number.isNaN()
Number.isFinite()
toFixed()
Math.max()
Math.min()
*/

const soal1 = function () {
  const transactions = [
    '1000',
    '-250.50',
    '300',
    'invalid',
    '450.75',
    '-100',
    '2000',
  ];

  const transactionsNum = transactions
    .map(transaction => {
      return Number(transaction);
    })
    .filter(transaction => !Number.isNaN(transaction));

  console.log(
    `Total       : ${transactionsNum.reduce((acc, num) => acc + num, 0)}\n` +
      `Average     : ${(transactionsNum.reduce((acc, num) => acc + num, 0) / transactionsNum.length).toFixed(2)} \n` +
      `Max         : ${Math.max(...transactionsNum)}\n` +
      `Min         : ${Math.min(...transactionsNum)}\n`,
  );
};
soal1();

/*
🏧 Challenge 2 — ATM Cash Withdrawal

Sebuah ATM hanya menerima nominal penarikan dalam kelipatan 50.

User memasukkan nominal dalam bentuk string:

const withdrawal = '1250.75';

Buat program yang:

Mengubah input menjadi number.
Membulatkan nominal ke bawah menjadi bilangan bulat.
Mengecek apakah nominal merupakan kelipatan 50.
Jika bukan kelipatan 50, cari nominal terdekat yang lebih kecil dan merupakan kelipatan 50.

Contoh:

Input       : 1250.75
Rounded     : 1250
ATM Amount  : 1250

Jika:

const withdrawal = '1278.90';

maka:

Input       : 1278.90
Rounded     : 1278
ATM Amount  : 1250
Hint

Coba pikirkan bagaimana:

Math.floor()

bisa dikombinasikan dengan operasi matematika.
*/

const soal2 = function () {
  const inputUser = '1278.90';
  const input = Math.floor(+inputUser);
  const atmAmount = Math.floor(input / 50) * 50;

  console.log(
    `Input       : ${inputUser}\n` +
      `Rounded : ${input} \n` +
      `ATM Amount : ${atmAmount}\n`,
  );
};

soal2();

/*
💰 Challenge 3 — Currency Converter

Kamu memiliki saldo dalam USD:

const balanceUSD = '1575.89';
const exchangeRate = 16450;

Konversikan saldo tersebut ke Rupiah.

Namun, hasil akhir harus:

dibulatkan ke rupiah terdekat
kemudian ditampilkan menggunakan format angka dengan 2 digit desimal

Contoh konsep output:

USD Balance : $1575.89
IDR Balance : Rp25,912,?00.00
Bonus

Bagaimana jika input:

const balanceUSD = 'not a number';

Program harus menghasilkan:

Invalid balance
*/

const soal3 = function () {
  const balanceUSD = '1575.89';
  const exchangeRate = 16450;

  if (!isNaN(balanceUSD)) {
    console.log(
      `USD Balance : $${+balanceUSD}\n` +
        `IDR Balance : ${Math.round(+balanceUSD * exchangeRate).toLocaleString('id-ID')}`,
    );
  } else {
    console.log(`Invalid Balance`);
  }
};

soal3();

/*
🎯 Challenge 4 — Investment Calculator

Kamu melakukan investasi sebesar:

const initialInvestment = '5000000';
const annualReturn = '8.5';
const years = '3';

Hitung nilai investasi setelah 3 tahun menggunakan compound interest:

Final=Initial×(1+rate)
years

Contoh konsep:

Initial Investment : Rp5,000,000
Annual Return      : 8.5%
Years              : 3
Final Value        : Rp6,?...
Syarat

Input semuanya masih berupa string.

Kamu harus melakukan conversion terlebih dahulu.

Gunakan:

Math.pow()

atau operator:

**

Kemudian bulatkan hasil akhirnya ke rupiah terdekat.
*/

const soal4 = function () {
  const initialInvestment = '5000000';
  const annualReturn = '8.5';
  const years = '3';

  console.log(
    `Initial Investment : Rp${Number(initialInvestment).toLocaleString('id-ID')}\n`,
    `Annual Return      :  ${+annualReturn}%\n`,
    `Years              : ${+years}\n`,
    `Final Value        : Rp${Math.round(+initialInvestment * (1 + +annualReturn / 100) ** +years).toLocaleString('id-ID')}`,
  );
};

soal4();

/*
🧮 Challenge 5 — Distance Calculator

Sebuah aplikasi mencatat jarak perjalanan:

const distances = ['12.7', '5.4', '8.9', '15.2', '3.8'];

Hitung:

Total jarak.
Jarak rata-rata.
Jarak terjauh.
Jarak terdekat.

Kemudian tampilkan:

Total Distance   : 46.00 km
Average Distance : 9.20 km
Longest Trip     : 15.20 km
Shortest Trip    : 3.80 km
Constraint

Hasil angka harus menggunakan:

toFixed(2)
*/

const soal5 = function () {
  const distances = ['12.7', '5.4', '8.9', '15.2', '3.8'];

  const totDistance = distances.reduce((add, dis) => add + +dis, 0);
  const maxDistance = Math.max(...distances.map(dis => +dis)).toFixed(2);
  const minDistance = Math.min(...distances.map(dis => +dis)).toFixed(2);
  console.log(maxDistance);

  console.log(
    `Total Distance   : ${totDistance.toFixed(2)} km\n` +
      `Average Distance : ${(totDistance / distances.length).toFixed(2)} km\n` +
      `Longest Trip     : ${maxDistance} km\n` +
      `Shortest Trip    : ${minDistance} km\n`,
  );
};

soal5();

/*
🧠🔥 Challenge 6 — Bankist: Interest Calculator

Ini yang paling Jonas-style.

Diberikan data rekening:

const accounts = [
  {
    owner: 'Jonas Schmedtmann',
    balance: 5000,
    interestRate: 1.2,
  },
  {
    owner: 'Jessica Davis',
    balance: 12000,
    interestRate: 2.5,
  },
  {
    owner: 'Steven Williams',
    balance: 8000,
    interestRate: 1.8,
  },
];

Bank menghitung bunga dengan:

interest = balance × interestRate / 100

Namun ada aturan:

Jika bunga kurang dari 50, maka bunga tersebut dianggap 50.

Buat program yang menghasilkan informasi:

Jonas Schmedtmann
Balance : $5000
Interest: $60


Jessica Davis
Balance : $12000
Interest: $300


Steven Williams
Balance : $8000
Interest: $144
Tantangan tambahan

Gunakan:

Math.max()

untuk menentukan minimum interest sebesar 50.

Jadi secara konsep:

interest = Math.max(calculatedInterest, 50);
*/

const soal6 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      balance: 5000,
      interestRate: 1.2,
    },
    {
      owner: 'Jessica Davis',
      balance: 12000,
      interestRate: 2.5,
    },
    {
      owner: 'Steven Williams',
      balance: 8000,
      interestRate: 1.8,
    },
  ];

  for (const acc of accounts) {
    console.log(`${acc.owner}`);
    console.log(`Balance : $${acc.balance}`);
    console.log(
      `Interest : ${Math.max((acc.balance * acc.interestRate) / 100, 50)}`,
    );
    console.log(`\n`);
  }
};

soal6();
/*
🚀 Challenge 7 — The Receipt Challenge

Ini challenge terakhir, dan menurutku paling cocok buat mengetes apakah materi kamu sudah benar-benar masuk.

Sebuah restoran mempunyai harga:

const prices = ['12.50', '8.75', '15.20', '5.50', '20.00'];
const tax = '10';
const serviceCharge = '5';

Hitung:

Total harga makanan.
Pajak 10%.
Service charge 5%.
Grand total.

Tetapi ada aturan:

Grand total harus dibulatkan ke kelipatan 500 rupiah terdekat.

Misalnya:

Total       : Rp62,000
Tax         : Rp6,200
Service     : Rp3,100
Grand Total : Rp71,300

Maka grand total harus dibulatkan menjadi:

Rp71,500
Yang ingin aku lihat dari kamu

Coba manfaatkan:

Number()
Math.round()
Math.floor()
Math.ceil()
toFixed()
*/

const soal7 = function () {
  const prices = ['12.50', '8.75', '15.20', '5.55', '20.00'];
  const tax = '10';
  const serviceCharge = '5';

  const total = prices.reduce((add, price) => add + +price, 0);

  const countTax = (total * +tax) / 100;

  const countService = (total * +serviceCharge) / 100;

  const grandTotal = total + countTax + countService;

  console.log(
    `Total       : Rp${Math.round(total * 1000).toLocaleString('en-US')}`,
  );
  console.log(
    `Tax         : Rp${Math.round(countTax * 1000).toLocaleString('en-US')}`,
  );
  console.log(
    `Service     : Rp${Math.round(countService * 1000).toLocaleString('en-US')}`,
  );
  console.log(
    `Grand Total : Rp${Math.round(grandTotal * 1000).toLocaleString('en-US')}`,
  );
};

soal7();
