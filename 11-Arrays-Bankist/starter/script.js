'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

//1. find() : find digunakan untuk mencari satu elemen pertama dalam array yang memenuhi kondisi tertentu. berbeda dengan filter yang dimana ia mengembalikan array baru dari hasil yang memenuhi suatu kondisi, find hanya mencari SATU ELEMEN PERTAMA. biasanya digunakan untuk mencari sebuah elemen dari suatu array dengan value yang unique dan apabila ada, dia akan mengembalikan elemen tersebut.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(move => move < 0);
const firstDeposit = movements.find(move => move > 0);

console.log(movements);
console.log(firstWithdrawal);
console.log(firstDeposit);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const soal1 = function () {
  const movements = [200, -450, 3000, -650, -1300, 500];

  const getFirstWithdrawal = movements.find(balance => balance < 0);
  console.log(`Penarikan Pertama : ${getFirstWithdrawal}`);
};

soal1();

const soal2 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      balance: 2500,
      active: true,
    },
    {
      owner: 'Jessica Davis',
      balance: 12000,
      active: false,
    },
    {
      owner: 'Steven Williams',
      balance: 8000,
      active: true,
    },
    {
      owner: 'Sarah Smith',
      balance: 15000,
      active: true,
    },
  ];

  const account = accounts.find(
    acc => acc.active === true && acc.balance >= 8000,
  );

  console.log(account.owner);
  console.log(account.balance);
};

soal2();

const soal3 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650],
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, -2000, 3000, -1000],
    },
    {
      owner: 'Steven Williams',
      movements: [200, -100, 50, -20, 100],
    },
  ];

  const get2000Withdrawal = accounts.find(acc =>
    acc.movements.find(balance => balance === -2000),
  );
  console.log(get2000Withdrawal);
};
soal3();
