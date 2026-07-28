'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderMenu: function (starterIndex, mainIndex) {
    //destrukturisasi pada sebuah function untuk return 2 nilai atau lebih
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //Destrukturisasi object pada sebuah parameter function
  orderDelivery: function ({
    name,
    starterIndex = 0,
    mainMenuIndex = 0,
    address,
    deliveryTime,
  }) {
    console.log(
      `Hai ${name}, Pesananmu adalah :\n1. Menu Pembuka : ${this.starterMenu[starterIndex]}\n2. Menu Utama : ${this.mainMenu[mainMenuIndex]}.\nAkan segera dikirim ke lokasimu (${address}) pada jam ${deliveryTime}`,
    );
  },
};

//DESTRUKTURISASI OBJECT : Sama seperti array pengertian destrukturisasi array juga sama. yang berbeda ialah object basisnya adalah nama dari properti dan bukan dari indexnya.

//dapatkan nilai dari nama restoran,mainMenu,dan openingHoursnya
const { name, mainMenu, openingHours } = restaurant;
console.log(name, mainMenu, openingHours);

//mengganti nama dari properti object yang kita mau destrukturisasi
const {
  name: restaurantName,
  mainMenu: mainCourse,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, mainCourse, hours);

//sett default value
const { menu = [] } = restaurant;
console.log(menu);

//Destrukturisasi pada nested object
const {
  thu: { open: open1 },
  fri: { open: open2 },
} = restaurant.openingHours;

console.log(open1, open2);

//orderDelivery : function dengan parameter berupa object & di destrukturisasi pada function
restaurant.orderDelivery({
  name: 'Delano Bariq Ramadhan',
  address: 'Graha Raya Dahlia Loka Blok RC 4/7',
  starterIndex: 2,
  mainMenuIndex: 1,
  deliveryTime: '21.00',
});

//////////////////////////////////
//ambil properti starterMenu dan mainMenu object restaurant lalu ubah namanya, dan simpan mereka ke sebuah array allMenu
const { starterMenu: starter, mainMenu: main } = restaurant;
console.log(starter, main);

const allMenu = [...starter, ...main];
console.log(allMenu);
