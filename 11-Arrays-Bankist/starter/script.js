'use strict';

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, -509],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//GROPU BY : sebuah cara untuk mengelompokkan elemen2 dalam sebuuah collecton berdasarkan sebuah kriteria.

const movements = [
  200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90,
];

const groupMovementsByType = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals',
);

console.log(`Deposits : `, groupMovementsByType.deposits);
console.log(`Withdrawals : `, groupMovementsByType.withdrawals);

const groupAccountsByActivity = Object.groupBy(accounts, ({ movements }) => {
  if (movements.length >= 8) return 'veryActive';
  if (movements.length >= 5) return 'active';
  if (movements.length >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupAccountsByActivity);
