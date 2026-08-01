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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*

  Looping Sebuah Object : dalam mengakses object kita bisa menggunakan for of loop, namun untuk mengakses object kita harus menggunakan Object.keys(), Object.values(), Object.entries() dalam mengakses object tersebut. 
  Object.keys() digunakan untuk mengakses key dari object, 
  Object.values() digunakan untuk mengakses value dari object, 
  dan Object.entries() digunakan untuk mengakses key dan value dari object.
  */

const getKeys = function (obj) {
  for (const day of Object.keys(obj)) {
    console.log(`Hari Buka Restoran : ${day}`);
  }
};

const getValues = function (obj) {
  for (const jamBuka of Object.values(openingHours)) {
    console.log(`Jam Buka Restoran : ${jamBuka.open} - ${jamBuka.close}`);
  }
};

const getEntries = function (obj) {
  for (const [day, { open, close }] of Object.entries(openingHours)) {
    console.log(`Hari Buka Restoran : ${day} Jam Buka : ${open} - ${close}`);
  }
};

// getKeys(openingHours);
// getValues(openingHours);
// getEntries(openingHours);

////////////////////////////////
