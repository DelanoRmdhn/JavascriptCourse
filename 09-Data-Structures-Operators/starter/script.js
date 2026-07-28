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
};

//DESTRUKTURISASI ARRAY : Sebuah cara dalam unpack/menguraikan sebuah nilai pada sebuah array atau object dengan membaginya menjadi variabel variabel yaang terpisah

const arrayUmur = [50, 45, 19, 17, 8];
const [papa, mama, lano, varra, elan] = arrayUmur;
console.log(papa, mama, lano, varra, elan);

//implementasi dengan REST OPERATOR
const [umurPapa, ...umurAnggotaKeluargaLainnya] = arrayUmur;
console.log(umurAnggotaKeluargaLainnya);

//Menukar nilai dengan cara destrukturisasi
let [mainCategory, , secondaryCategory] = restaurant.categories;
console.log(mainCategory, secondaryCategory);

[mainCategory, secondaryCategory] = [secondaryCategory, mainCategory];
console.log(mainCategory, secondaryCategory);

//Mendapatkan nilai dari return function orderMenu
const getAllMenu = restaurant.orderMenu(2, 0);
console.log(getAllMenu);

//Mendapatkan nilai dari return function orderMenu dan simpan ke variable yang berbeda
const [orderedStarter, orderedMain] = restaurant.orderMenu(2, 0);
console.log(orderedStarter, orderedMain);

//Destrukturisasi pada Nested Array
const umurKeluargaSaya = [[50, 45], [19, 17, 8], 76];

const [[...orangTua], [...anak], ompung] = umurKeluargaSaya;
console.log(`Umur Orang Tua : ${orangTua}`);
console.log(`Umur Anak - Anak : ${anak}`);
console.log(`Umur Ompung : ${ompung}`);

//Sett nilai default pada saat Destrukturisasi Array
const arr2 = [1, 2, 3];
const [w = 1, x = 1, y = 1, z = 1] = arr2;
console.log(w, x, y, z);
