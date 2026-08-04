'use strict';

//LATIHAN SOAL 1 : MAP
const orders = new Map([
  [101, { customer: 'Delano', menu: 'Pizza', qty: 2 }],
  [102, { customer: 'Rangga', menu: 'Burger', qty: 1 }],
  [103, { customer: 'Fadhil', menu: 'Pizza', qty: 3 }],
  [104, { customer: 'Delano', menu: 'Pasta', qty: 1 }],
  [105, { customer: 'Rangga', menu: 'Pizza', qty: 2 }],
]);

/* 
Soal 1 — Tampilkan semua order

Output

Order 101
Customer : Delano
Menu     : Pizza
Qty      : 2

Order 102
Customer : Rangga
Menu     : Burger
Qty      : 1

...
*/

const getAllOrder = function () {
  for (const [key, { customer, menu, qty }] of orders) {
    console.log(`Order ${key}`);
    console.log(`Customer : ${customer}`);
    console.log(`Menu : ${menu}`);
    console.log(`Qty : ${qty}`);
    console.log(`----------------------`);
  }
};

getAllOrder();

/*
Soal 2 — Cari Order

Buat fungsi

findOrder(103);

Output

Fadhil membeli Pizza sebanyak 3

Kalau ID tidak ada

Order tidak ditemukan
*/

const findOrder = function (id) {
  if (orders.has(id)) {
    const { customer, menu, qty } = orders.get(id);
    console.log(`${customer} membeli ${menu} sebanyak ${qty}`);
  } else {
    console.log(`Gaada `);
  }
};
findOrder(103);

/*
Soal 3 — Hitung Total Qty

Hitung seluruh qty yang ada.

Output

Total makanan terjual : 9
*/

const getTotalQty = function () {
  let totalQty = 0;
  for (const [, { qty }] of orders) {
    totalQty += qty;
  }
  console.log(`Total Makanan Terjual : ${totalQty}`);
};

getTotalQty();

/**
 Soal 4 — Customer Unik

Ambil semua nama customer TANPA DUPLIKAT.

Output

Delano
Rangga
Fadhil

(Hint: boleh menggunakan Set.)
 */

const getUniqueCustomer = function () {
  const uniqueCustomer = new Set();
  for (const [, { customer }] of orders) {
    uniqueCustomer.add(customer);
  }
  console.log(uniqueCustomer);
};

getUniqueCustomer();

/*
Soal 5 — Menu Terlaris

Hitung jumlah pembelian setiap menu.

Output

Pizza : 7
Burger : 1
Pasta : 1

Gunakan Map baru untuk menyimpan hasilnya.
*/

const topSellingMenu = function () {
  const topMenu = new Map();
  for (const [, { menu, qty }] of orders) {
    // console.log(menu, qty);
    if (!topMenu.has(menu)) {
      topMenu.set(menu, qty);
    } else {
      topMenu.set(menu, topMenu.get(menu) + qty);
    }
  }
  for (const [menu, qty] of topMenu) {
    console.log(`${menu} : ${qty}`);
  }
};
topSellingMenu();

/*
Soal 6 — Customer Paling Banyak Order

Output

Delano : 3 makanan
Rangga : 3 makanan
Fadhil : 3 makanan

Bukan jumlah transaksi, tetapi total qty.
*/

const getFavoriteCustomer = function () {
  const favCustomer = new Map();
  for (const [, { customer, qty }] of orders) {
    if (!favCustomer.has(customer)) {
      favCustomer.set(customer, qty);
    } else {
      favCustomer.set(customer, favCustomer.get(customer) + qty);
    }
  }

  for (const [customer, totalOrder] of favCustomer) {
    console.log(`${customer} : ${totalOrder} Makanan`);
  }
};
getFavoriteCustomer();

/*
Soal 7 — Hapus Semua Order Pizza

Buat Map baru yang tidak memiliki menu Pizza.

Output

102
104

Map asli tidak boleh berubah.
*/

const deletePizza = function () {
  const filteredOrders = new Map();

  for (const [key, value] of orders) {
    if (value.menu !== 'Pizza') {
      filteredOrders.set(key, value);
    }
  }
  console.log(filteredOrders);
};
deletePizza();

/*
Soal 8 — Update Qty

Ubah qty order

ID 102

menjadi

5

Gunakan method Map yang benar.

Output

Burger -> 5
*/

const changeQty = function (id) {
  const order = orders.get(id);
  order.qty = 5;
  console.log(orders.get(id));
};
changeQty(102);

/*
Soal 9 — Konversi

Ubah Map menjadi

Array

lalu ubah kembali menjadi

Map

Pastikan isinya tetap sama.
*/

const conversion = function () {
  const ordersArr = [...orders];
  console.log(ordersArr);

  const ordersMap = new Map(ordersArr);
  console.log(ordersMap);
};

conversion();

/*
Soal 10 — Reverse Lookup

Cari semua order milik

Delano

Output

101
104
*/

const searchOrder = function (customerName) {
  for (const [key, { customer }] of orders) {
    if (customer === customerName) {
      console.log(key);
    }
  }
};

searchOrder('Delano');

//BONUS 1
const log = [
  'Pizza',
  'Burger',
  'Pizza',
  'Pizza',
  'Pasta',
  'Burger',
  'Pizza',
  'Steak',
  'Burger',
];

/*
Gunakan Map untuk menghasilkan

Pizza  -> 4
Burger -> 3
Pasta  -> 1
Steak  -> 1

Tanpa menggunakan object.
*/

const generateMap = function (array) {
  const orderMap = new Map();

  for (const value of array) {
    if (!orderMap.has(value)) {
      orderMap.set(value, 1);
    } else {
      orderMap.set(value, orderMap.get(value) + 1);
    }
  }

  console.log(orderMap);
  for (const [key, value] of orderMap) {
    console.log(`${key} -> ${value}`);
  }
};
generateMap(log);

//BONUS 2
const voting = [
  ['Delano', 'Pizza'],
  ['Rangga', 'Burger'],
  ['Fadhil', 'Pizza'],
  ['Delano', 'Burger'],
  ['Delano', 'Pizza'],
  ['Fadhil', 'Pizza'],
];

/*
Buat hasil seperti berikut menggunakan Map of Map.

Delano
   Pizza : 2
   Burger : 1

Rangga
   Burger : 1

Fadhil
   Pizza : 2

Di sini setiap key customer memiliki Map lain sebagai value.
*/

const mapOfMap = function (array) {
  const maps = new Map();

  for (const [customerName, menu] of array) {
    if (!maps.has(customerName)) {
      maps.set(customerName, new Map());
    }

    const customerVotes = maps.get(customerName);
    if (!customerVotes.has(menu)) {
      customerVotes.set(menu, 1);
    } else {
      customerVotes.set(menu, customerVotes.get(menu) + 1);
    }
  }
  console.log(maps);
};
mapOfMap(voting);
