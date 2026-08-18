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

//SORT :

//Perilaku jika elemen sebuah array adalah string :
const friends = [
  'Fairuz',
  'Farrel',
  'Ezra',
  'Tiansen',
  'Airlangga',
  'Bimo',
  'Bahlil',
];
console.log(friends);
//bentuk sort default A-Z
console.log(friends.sort());

//bentuk sort format Z-A
console.log(friends.sort((a, b) => b.localeCompare(a)));

//Perilaku jika elemen sebuah array adalah number :
const movements = [200, 450, -400, 3000, -650, -130, 1300, 70, 1300];

console.log(movements);

//Sort dari paling kecil ke paling besar (ascending)
console.log(movements.sort((a, b) => a - b));

//Sort dari paling besaar ke paling kecil (descending)
console.log(movements.sort((a, b) => b - a));

//JIKA RETURN VALUE NYA 0, POSISI DIA GA BERUBAH