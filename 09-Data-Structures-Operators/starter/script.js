'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
};

/*
Challenge 1 — Weekly Opening Report (⭐⭐⭐⭐)

Buat program yang menghasilkan output berikut menggunakan object restaurant di atas.

Output:

===== WEEKLY OPENING REPORT =====

THU : Open at 12, Close at 22
FRI : Open at 11, Close at 23
SAT : Open 24 Hours
*/

const weeklyOpeningReport = function (obj) {
  console.log('===== WEEKLY OPENING REPORT =====');
  for (const [day, { open, close }] of Object.entries(obj)) {
    console.log(`${day} : Open at ${open}, Close at ${close}`);
  }
};

weeklyOpeningReport(restaurant.openingHours);

/*
Challenge 2 — Complete Restaurant Inspection (⭐⭐⭐⭐⭐)

Tampilkan seluruh isi object restaurant dengan format berikut.

Output:

name :
Classico Italiano

location :
Via Angelo Tavanti 23, Firenze, Italy

categories :
Italian
Pizzeria
Vegetarian
Organic

starterMenu :
Focaccia
Bruschetta
Garlic Bread
Caprese Salad

mainMenu :
Pizza
Pasta
Risotto

openingHours :
thu -> 12 - 22
fri -> 11 - 23
sat -> 0 - 24
*/

const restaurantInformation = function (obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} :`);

    if (Array.isArray(value)) {
      for (const item of value) {
        console.log(item);
      }
    } else if (typeof value === 'object' && value !== null) {
      for (const [day, hours] of Object.entries(value)) {
        console.log(`${day} -> ${hours.open} - ${hours.close}`);
      }
    } else {
      console.log(value);
    }

    console.log();
  }
};
restaurantInformation(restaurant);
