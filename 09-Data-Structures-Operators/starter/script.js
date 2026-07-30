'use strict';

//TUGAS MINGGU 3

/*Berdasarkan materi yang sudah kamu pelajari, yaitu:

✅ Array
✅ Object
✅ Destructuring
✅ Spread Operator
✅ Rest Operator
✅ Short Circuiting (&&, ||)
✅ Nullish Coalescing (??)
*/

const restaurant = {
  name: "Delano's Kitchen",
  location: 'Bandung',
  categories: ['Italian', 'Pizza', 'Vegetarian'],
  starterMenu: ['Garlic Bread', 'Soup', 'Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Steak'],
};

//Fitur 1
const showRestaurantInfo = function () {
  const {
    name,
    location,
    categories: [cat1, cat2, cat3],
  } = restaurant;

  console.log(`
    ===== RESTAURANT =====
    
    Nama : 
    ${name}
    
    Lokasi : 
    ${location}
    
    Kategori : 
    ${cat1}
    ${cat2}
    ${cat3}
    `);
};

showRestaurantInfo();

//Fitur 2
const showAllMenu = function () {
  console.log(`Starter Menu`);
  for (let i = 0; i < restaurant.starterMenu.length; i++) {
    console.log(`${i + 1}. ${restaurant.starterMenu[i]}`);
  }

  console.log(`Main Menu`);
  for (let i = 0; i < restaurant.mainMenu.length; i++) {
    console.log(`${i + 1}. ${restaurant.mainMenu[i]}`);
  }
};

showAllMenu();

//Fitur 3
const orderFood = function (starterIndex, mainIndex) {
  console.log(
    `
    Pesanan
    
    Starter : 
    ${restaurant.starterMenu[starterIndex]}
    
    Main Course : 
    ${restaurant.mainMenu[mainIndex]}
    `,
  );
};

orderFood(1, 2);

//Fitur 4
const addNewMenu = function (newMenu) {
  const updatedRestaurant = {
    ...restaurant,
    ...newMenu,
  };
  console.log(updatedRestaurant);
  console.log(`Menu berhasil ditambahkan!`);
  return updatedRestaurant;
};

const updatedRestaurant = addNewMenu({
  dessertMenu: ['Ice Cream', 'Cake'],
  drink: ['Mocktail', 'Espresso'],
});

//Fitur 5
const copyRestaurant = { ...restaurant };
copyRestaurant.name = `Delano's Kitchen Premium`;
console.log(copyRestaurant.name);

//Fitur 6
const getAllMenu = function () {
  const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  return allMenu;
};

const allMenu = getAllMenu();
console.log(allMenu);

//Fitur 7
const feature7 = function () {
  const { name, location, categories } = restaurant;
  console.log(`
    Nama :
    ${name}

    Lokasi : 
    ${location}

    Kategori : 
    ${categories.join('\n\t')}
    `);
};

feature7();

//Fitur 8
const getTwoStarterMenu = function () {
  const [first, second] = restaurant.starterMenu;
  console.log(
    `
      Starter Pertama 
      ${first}
      
      Starter Kedua
      ${second}
      `,
  );
};
getTwoStarterMenu();

//Fitur 9
const feature9 = function () {
  const [firstMenu, secondMenu, ...otherMenu] = allMenu;
  console.log(`
    Menu Pertama 
    ${firstMenu}

    Menu Kedua 
    ${secondMenu}
    `);
  console.log(`Menu Lain`);
  for (let i = 0; i < otherMenu.length; i++) {
    console.log(`${otherMenu[i]}`);
  }
};

feature9();

//Fitur 10
const orderMany = function (...orders) {
  console.log(`Total pesanan`);
  for (let i = 0; i < orders.length; i++) {
    console.log(`${orders[i]}`);
  }
};

orderMany('Pizza', 'Soup', 'Pasta', 'Steak');

//Fitur 11
restaurant.numGuest = 20;
console.log(restaurant.numGuest || 10);

restaurant.numGuest = 0;
console.log(restaurant.numGuest ?? 10);

/* 
Penjelasan perbedaan : 
Operator || mengembalikan nilai pertama yang bersifat truthy. Jika nilai pertama falsy, maka ia akan mengembalikan nilai berikutnya.
Operator ?? hanya menganggap null dan undefined sebagai "kosong". Nilai seperti 0, false, atau string kosong ('') tetap dianggap nilai yang valid.
*/

//Fitur 12
restaurant.orderPizza = function (menu) {
  console.log(menu);
};
restaurant.orderPizza && restaurant.orderPizza('Pepperoni');

/*
Penjelasan : 
&& akan berhenti ketika menemukan nilai falsy.

Jika nilai pertama truthy,
maka JavaScript akan mengevaluasi nilai berikutnya.

Karena restaurant.orderPizza adalah function (truthy),
maka restaurant.orderPizza("Pepperoni")
akan dijalankan.
*/

//fitur 13
const feature13 = function () {
  const newRestaurant = {
    ...restaurant,
    owner: 'Delano',
    founded: 2026,
  };
  return newRestaurant;
};

const newRestaurant = feature13();
console.log(`
  Owner 
  ${newRestaurant.owner}

  Founded
  ${newRestaurant.founded}
  `);
