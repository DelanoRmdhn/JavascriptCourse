'use strict';

//LATIHAN SOAL GROUP BY

/*
🟢 Latihan 1 — Transaction Grouping ⭐⭐

Diberikan:

const movements = [
  200,
  -450,
  700,
  -1200,
  3000,
  -150,
  850,
];

Gunakan Object.groupBy() untuk mengelompokkan transaksi menjadi:

deposit → transaksi positif
withdrawal → transaksi negatif

Expected:

{
  deposit: [200, 700, 3000, 850],
  withdrawal: [-450, -1200, -150]
}

Constraint:

Gunakan Object.groupBy()
Jangan gunakan filter()
Jangan mengubah movements asli
*/

const soal1 = function () {
  const movements = [200, -450, 700, -1200, 3000, -150, 850];

  const groupByMovementsType = Object.groupBy(movements, mov =>
    mov > 0 ? 'deposit' : 'withdrawal',
  );

  console.log(`Deposit : ${groupByMovementsType.deposit}`);
  console.log(`Withdrawal : ${groupByMovementsType.withdrawal}`);
};
soal1();

/*
🟠 Latihan 2 — Account Classification ⭐⭐⭐

Diberikan:

const accounts = [
  {
    owner: 'Jonas',
    movements: [200, 450, -400, 3000],
  },
  {
    owner: 'Jessica',
    movements: [5000, -300, 2000],
  },
  {
    owner: 'Steven',
    movements: [-200, -500, 100],
  },
  {
    owner: 'Sarah',
    movements: [1000, 500, -200],
  },
];

Kelompokkan account berdasarkan apakah balance mereka positif atau negatif.

Balance dihitung menggunakan reduce().

Expected bentuk hasil:

{
  positive: [
    // account yang balance-nya > 0
  ],
  negative: [
    // account yang balance-nya < 0
  ]
}

Constraint:

Kamu perlu menggabungkan:

reduce
   ↓
tentukan kategori
   ↓
groupBy

Jangan menambahkan property balance ke object original.
*/

const soal2 = function () {
  const accounts = [
    {
      owner: 'Jonas',
      movements: [200, 450, -400, 3000],
    },
    {
      owner: 'Jessica',
      movements: [5000, -300, 2000],
    },
    {
      owner: 'Steven',
      movements: [-200, -500, 100],
    },
    {
      owner: 'Sarah',
      movements: [1000, 500, -200],
    },
  ];

  const groupByBalance = Object.groupBy(accounts, acc => {
    const balance = acc.movements.reduce((add, mov) => add + mov, 0);

    if (balance > 0) return 'positive';
    else return 'negative';
  });

  console.log(groupByBalance);
};

soal2();

/*
🔴 Latihan 3 — Bankist Transaction Groups ⭐⭐⭐⭐

Diberikan:

const movements = [
  200,
  -450,
  700,
  -1200,
  3000,
  -150,
  850,
  -75,
  4200,
];

Kelompokkan transaksi menjadi 3 kategori:

small
medium
large

Aturannya:

|movement| < 500
→ small


500 <= |movement| < 2000
→ medium


|movement| >= 2000
→ large

Expected:

{
  small: [
    200,
    -450,
    -150,
    -75
  ],


  medium: [
    700,
    -1200,
    850
  ],


  large: [
    3000,
    4200
  ]
}

Hint: Karena transaksi bisa negatif, perhatikan penggunaan:

Math.abs()
*/

const soal3 = function () {
  const movements = [200, -450, 700, -1200, 3000, -150, 850, -75, 4200];

  const groupByBalanceTransaction = Object.groupBy(movements, move => {
    if (Math.abs(move) < 500) return 'small';
    if (Math.abs(move) >= 500 && Math.abs(move) <= 2000) return 'medium';
    if (Math.abs(move) >= 2000) return 'large';
  });

  console.log(groupByBalanceTransaction);
};

soal3();
