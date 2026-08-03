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

/*MAP : Struktur data yang menyimpan sebuah adata dalam bentuk key-value (sama seperti object), tetapi keynya bisa bertipe data apa saja*/

const restaurantMap = new Map();
restaurantMap
  .set(1, restaurant.location)
  .set(true, 'We Are Open :D')
  .set(false, 'We Are Close :(')
  .set('open', 10)
  .set('close', 23)
  .set('AllMenu', [...restaurant.starterMenu, ...restaurant.mainMenu]);

const currentTime = 21;

console.log(
  restaurantMap.get(
    currentTime > restaurantMap.get('open') &&
      currentTime < restaurantMap.get('close'),
  ),
);

//sama aja kayak
// if (
//   currentTime > restaurantMap.get('open') &&
//   currentTime < restaurantMap.get('close')
// )
//   console.log(restaurantMap.get(true));

for (const [key, value] of restaurantMap) {
  console.log(`${typeof key} ${key} : ${value}`);
}

const scriptElement = new Map();
scriptElement.set(document.querySelector('h1'), 'heading1');
scriptElement.get(
  document.querySelector('h1').addEventListener('click', function () {
    console.log('click');
  }),
);

//has
console.log(restaurantMap.has('open'));

//delete(key)
restaurantMap.delete(1);
console.log(restaurantMap);

//size
console.log(restaurantMap.size);

//clear()
// restaurantMap.clear()

////////////////////////////////////////////
//cara lain dalam membuat sebuah Map
////////////////////////////////////////////
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//latihan soal
const pertanyaan = new Map([
  ['question', 'Bahasa Pemrograman apa yang Terbaik?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [(true, 'Betul!')],
  [false, 'Salah!'],
]);

console.log(pertanyaan.get('question'));
for (const [key, value] of pertanyaan) {
  if (typeof key === 'number') {
    console.log(`${key} : ${value}`);
  }
}

// const answer = Number(prompt('Jawaban Kamu'));
// console.log(typeof answer, answer);
const answer = 3;

console.log(pertanyaan.get('correct') === answer);
