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

const restaurant = [
  {
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

    orderDelivery({
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      address,
    }) {
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
  },
];

/*
OPTIONAL CHAINING ?. : Operator yang digunakan untuk mengakses properti atau memanggil method dalam sebuah object dengan aman. jika suatu properti nilainya adalah undefined / null, kita bisa gunakan optional chaining sebagai cara dalam melakukan pengecekan apakah properti tersebut ada / tidak nilainya.

operator ini seringnya digunakan untuk melakukan pengecekan properti / method pada object bersarang (nested object).
*/

console.log(restaurant[0].openingHours?.fri);

/*
?. setelah openingHours berarti apakah properti openingHours pada object restaurant[0] ada? jika ada jalankan properti fri, jika tidak kmbalikan undefined 
*/

//penggunaan ?. pada method
restaurant[0].orderPizza?.('ikan', 'brokoli', 'jamur'); //-> berarti jika restaurant[0] memiliki method orderPizza, jalankan method tersebut

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant[0].openingHours[day]?.open ?? 10;

  if (open !== undefined) {
    console.log(`On ${day} we're open at ${open}`);
  } else {
    console.log(`We are closed on ${day}`);
  }
}
