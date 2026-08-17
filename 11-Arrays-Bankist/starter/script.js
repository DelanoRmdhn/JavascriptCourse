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
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
//5. Flat() & FlatMap();

/*
  Flat() : digunakan untuk meratakan sebuah Nested array.
  FlatMap() : gabungan antara method flat dan map. hanya saja kedalaman yang biisa dicapai cuma satu tingkatan saja.
  */

const numbers = [[1, 2, 3, 4], [5, 6, 7, 8], 9, 10, [11]];
console.log(numbers.flat(1));

//FLATMAP
const getAllBalance = accounts
  .map(({ movements }) => movements)
  .flat(1)
  .reduce((acc, balance) => acc + balance, 0);
console.log(`All Balance Combine :`, getAllBalance);

//FLATMAP
const getTotalWithdrawal = accounts
  .flatMap(({ movements }) => movements.filter(mov => mov < 0))
  .reduce((acc, balance) => acc + Math.abs(balance), 0);
console.log(`All Withdrawals : `, getTotalWithdrawal);
