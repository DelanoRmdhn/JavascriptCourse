'use strict';

//LATIHAN SOAL

/*
🧠 Challenge 3 — Bank Transaction Generator

Kamu sedang membuat simulator transaksi bank.

Gunakan new Array(), .fill(), dan Array.from() untuk membuat data transaksi secara otomatis.

🎯 Requirement

Buat sebuah array bernama transactions yang berisi 50 transaksi.

Setiap transaksi harus berupa angka random antara -1000 sampai 1000.

Contoh hasil:

[
  450,
  -721,
  32,
  -999,
  812,
  ...
]

Tetapi ada beberapa aturan.

Requirement 1 — Gunakan new Array()

Pertama, buat array dengan panjang 50 menggunakan:

new Array(...)

Jangan langsung menggunakan Array.from() untuk membuat array utamanya.

Requirement 2 — Gunakan .fill()

Gunakan .fill() pada array tersebut.

Tujuannya adalah membuat semua slot array memiliki nilai awal 0.

Sehingga sebelum diubah menjadi transaksi random, bentuknya:

[
  0,
  0,
  0,
  0,
  ...
]

sebanyak 50 elemen.

Requirement 3 — Gunakan Array.from()

Sekarang buat array transaksi random menggunakan Array.from().

Setiap transaksi harus memiliki nilai:

-1000 sampai 1000

Contoh:

-523
872
-12
1000
-741
0
...

Perhatikan: angka 1000 dan -1000 harus termasuk dalam kemungkinan hasil.

🔥 Bonus Challenge

Setelah berhasil membuat transactions, buat:

A. deposits

Array yang hanya berisi transaksi positif.

Contoh:

[
  500,
  200,
  1000,
  72
]
B. withdrawals

Array yang hanya berisi transaksi negatif.

Contoh:

[
  -500,
  -200,
  -872
]
C. balance

Hitung total seluruh transaksi.

Misalnya:

500 + (-200) + 300 + (-100)

maka:

500
*/

const soal1 = function () {
  const transactions = new Array(50);
  console.log(transactions);

  transactions.fill(0);
  console.log(transactions);

  const randomTransactions = Array.from(
    transactions,
    () => Math.floor(Math.random() * 2001) - 1000,
  );
  console.log(randomTransactions);

  const groupByTransactionType = Object.groupBy(
    randomTransactions,
    transactions => {
      if (transactions > 0) return 'deposit';
      if (transactions < 0) return 'withdrawal';
      return 'neutral';
    },
  );

  const deposit = groupByTransactionType.deposit;
  const withdrawal = groupByTransactionType.withdrawal;

  console.log(deposit);
  console.log(withdrawal);

  const totalTransaction = randomTransactions.reduce(
    (acc, transactions) => acc + transactions,
    0,
  );
  console.log(totalTransaction);
};

soal1();

/*
🧠 Challenge 4 — Bank Account Activity Analyzer

Kamu mendapatkan data aktivitas transaksi dari beberapa nasabah bank.

Gunakan Array.from(), map(), filter(), reduce(), dan Object.groupBy() untuk mengolah data tersebut.

🎯 Requirement 1 — Generate Transaction Data

Buat sebuah array bernama:

const transactions = ...

yang berisi 30 transaksi.

Gunakan:

Array.from()

Setiap transaksi berupa object dengan format:

{
  id: 1,
  amount: 750
}

id harus dimulai dari 1 sampai 30.

amount adalah angka random antara -2000 sampai 5000.

Contoh:

[
  { id: 1, amount: 2500 },
  { id: 2, amount: -750 },
  { id: 3, amount: 1200 },
  { id: 4, amount: -1800 },
  ...
]
🎯 Requirement 2 — Tambahkan Transaction Type

Buat array baru bernama:

transactionDetails

Gunakan map().

Setiap object harus memiliki:

{
  id: 1,
  amount: 750,
  type: 'deposit'
}

Aturannya:

amount > 0 → 'deposit'
amount < 0 → 'withdrawal'
amount === 0 → 'neutral'

Contoh:

[
  { id: 1, amount: 750, type: 'deposit' },
  { id: 2, amount: -500, type: 'withdrawal' },
  { id: 3, amount: 0, type: 'neutral' }
]
🎯 Requirement 3 — Ambil Transaksi Besar

Buat:

largeTransactions

Gunakan filter().

Masukkan hanya transaksi yang memiliki:

amount >= 1000

Contoh:

[
  { id: 1, amount: 2500, type: 'deposit' },
  { id: 7, amount: 1200, type: 'deposit' }
]
🎯 Requirement 4 — Total Balance

Buat:

balance

Gunakan reduce().

Hitung:

semua deposit + semua withdrawal

Contoh:

2500 + (-750) + 1200 + (-1800)

Hasil:

1150
🎯 Requirement 5 — Group Transaction

Gunakan:

Object.groupBy()

untuk mengelompokkan transaksi berdasarkan type.

Hasil yang diharapkan:

{
  deposit: [
    ...
  ],


  withdrawal: [
    ...
  ],


  neutral: [
    ...
  ]
}
🔥 BONUS CHALLENGE

Sekarang kita naik level.

Bonus A — Total Deposit

Buat:

totalDeposit

yang berisi total seluruh transaksi deposit.

Contoh:

500 + 1200 + 300 + 750

Gunakan kombinasi:

filter() + reduce()
Bonus B — Total Withdrawal

Buat:

totalWithdrawal

yang berisi total seluruh transaksi withdrawal.

Contoh:

-500 + -1200 + -300

Gunakan:

filter() + reduce()

Hasilnya boleh tetap negatif.

Bonus C — Average Transaction

Buat:

averageTransaction

yang menghitung rata-rata seluruh transaksi.

Rumus:

total seluruh amount
────────────────────
jumlah transaksi

Gunakan:

reduce()

dan properti:

.length
☠️ SUPER BONUS — Transaction Report

Buat sebuah object:

report

dengan struktur:

{
  totalTransactions: 30,
  totalDeposit: ...,
  totalWithdrawal: ...,
  balance: ...,
  averageTransaction: ...,
  largestDeposit: ...,
  largestWithdrawal: ...
}
*/

const soal2 = function () {
  //REQ 1
  const transactions = Array.from(new Array(30), (_, i) => {
    return {
      id: i + 1,
      amount: Math.floor(Math.random() * 7001) - 2000,
    };
  });
  console.log(transactions);

  //REQ 2
  const transactionsDetails = transactions.map(({ id, amount }) => {
    return {
      id,
      amount,
      type: amount > 0 ? 'deposit' : amount < 0 ? 'withdrawal' : 'neutral',
    };
  });
  console.log(transactionsDetails);

  //REQ 3
  const largeTransactions = transactionsDetails.filter(
    ({ amount }) => amount >= 1000,
  );
  console.log(largeTransactions);

  const balance = transactionsDetails.reduce(
    (add, { amount }) => add + amount,
    0,
  );
  console.log(balance);

  //REQ 4
  const groupByTransactionType = Object.groupBy(
    transactionsDetails,
    ({ amount }) => {
      if (amount > 0) return 'deposit';
      if (amount < 0) return 'withdrawal';
      return 'neutral';
    },
  );

  console.log(groupByTransactionType.deposit);
  console.log(groupByTransactionType.withdrawal);
  console.log(groupByTransactionType.neutral);

  //BONUS

  const totalDeposit = transactionsDetails
    .filter(({ amount }) => amount > 0)
    .reduce((add, { amount }) => add + amount, 0);

  console.log(totalDeposit);

  const totalWithdrawal = transactionsDetails
    .filter(({ amount }) => amount < 0)
    .reduce((add, { amount }) => add + amount, 0);

  console.log(totalWithdrawal);

  const averageTransaction =
    transactionsDetails.reduce((add, { amount }) => add + amount, 0) /
    transactionsDetails.length;

  console.log(averageTransaction);
};

soal2();
