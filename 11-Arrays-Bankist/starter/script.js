'use strict';

//6. REDUCE : digunakan untuk meringkas semua elemen pada array menjadi 1 nilai.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalBalance = movements.reduce((sum, balance, i) => {
  console.log(`Iteration ${i} : ${sum}`);
  return (sum += balance);
}, 0);

console.log(totalBalance);

const soal1 = function () {
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const balance = movements.reduce((acc, balance) => (acc += balance), 0);
  console.log(`Saldo Akhir : ${balance}`);
};

soal1();

const soal2 = function () {
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const allDeposit = movements.reduce(function (acc, balance) {
    if (balance > 0) {
      return (acc += balance);
    }

    return acc;
  }, 0);

  console.log(`Semua Deposit : ${allDeposit}`);
};

soal2();

const soal3 = function () {
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const totalWithdrawal = movements.reduce(function (acc, balance) {
    if (balance < 0) {
      return acc + balance;
    }
    return acc;
  }, 0);

  console.log(`Total Penarikan : ${Math.abs(totalWithdrawal)}`);
};

soal3();

const soal4 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000],
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790],
    },
    {
      owner: 'Steven Thomas',
      movements: [200, -200, 340, -300],
    },
  ];

  const accountBalance = accounts.map(function ({ movements }) {
    return movements.reduce((acc, balance) => acc + balance, 0);
  });

  console.log(accountBalance);
};

soal4();

const soal5 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    },
    {
      owner: 'Steven Thomas',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
    },
  ];

  const allBalance = accounts
    .map(function ({ movements }) {
      return movements.reduce((acc, balance) => acc + balance, 0);
    })
    .reduce(function (acc, balance) {
      return acc + balance;
    }, 0);

  console.log(`Saldo Semua Akun : ${allBalance}`);
};

soal5();
