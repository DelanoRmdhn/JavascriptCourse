'use strict';

//5. FILTER : digunakan untuk memilih elemen elemen dari sebuah array yang memenuhi sebuah kondisi tertentu. kemudian si truthy values tersebut akan disimpan pada sebuah array. callback dari function filter HARUS menghasilkan sesuatu yang dianggap true / false (boolean).

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const getDeposits = movements.filter(function (move) {
  return move > 0;
});

const getWithdrawals = movements.filter(move => move < 0);

console.log(getDeposits);
console.log(getWithdrawals);

///////////////////////
//LATIHAN SOAL
///////////////////////

const soal1 = function () {
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, -50, 900];

  const largeDeposits = movements.filter(move => move >= 500);
  console.log(largeDeposits);
};

soal1();

const soal2 = function () {
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
    {
      owner: 'Mike Smith',
      movements: [50, 100, -20, 40],
    },
    {
      owner: 'Delano Ramadhan',
      movements: [50, 100],
    },
  ];

  const activeAccounts = accounts.filter(function (accounts) {
    return accounts.movements.length >= 4;
  });

  console.log(activeAccounts);
};

soal2();

const soal3 = function () {
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
    {
      owner: 'Mike Smith',
      movements: [100, -500, -200],
    },
  ];

  const positiveBalance = accounts.filter(function ({ movements }) {
    let total = 0;

    for (const balance of movements) {
      total += balance;
    }

    return total > 0;
  });

  console.log(positiveBalance);
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
    {
      owner: 'Mike Smith',
      movements: [50, -20, 100],
    },
  ];

  const username = accounts
    .filter(function ({ movements }) {
      let hasNegative = false;

      movements.forEach(function (balance) {
        if (balance < 0) {
          hasNegative = true;
        }
      });

      return hasNegative;
    })
    .map(function ({ owner }) {
      const username = owner
        .split(' ')
        .map(char => char[0])
        .join('')
        .toLowerCase();

      return username;
    });

  console.log(username);
};

soal4();

const soal5 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      pin: 1111,
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      pin: 2222,
    },
    {
      owner: 'Steven Thomas',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      pin: 3333,
    },
    {
      owner: 'Mike Smith',
      movements: [50, 100, -20],
      pin: 4444,
    },
  ];

  const premiumAccounts = accounts.filter(function ({ movements }) {
    let hasLargeDeposit = false;
    let hasLargeWithdrawal = false;

    movements.forEach(function (balance) {
      if (balance >= 5000) {
        hasLargeDeposit = true;
      }
      if (balance <= -1000) {
        hasLargeWithdrawal = true;
      }
    });
    return hasLargeDeposit && hasLargeWithdrawal;
  });

  console.log(premiumAccounts);
};

soal5();
