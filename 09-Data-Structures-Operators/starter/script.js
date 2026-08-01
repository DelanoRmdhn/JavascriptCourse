'use strict';

const store = {
  name: 'Delano Store',

  products: [
    {
      name: 'Keyboard',
      category: 'Electronics',
      sold: 23,
    },

    {
      name: 'Mouse',
      category: 'Electronics',
      sold: 15,
    },

    {
      name: 'Notebook',
      category: 'Stationery',
      sold: 30,
    },

    {
      name: 'Pen',
      category: 'Stationery',
      sold: 40,
    },
  ],

  ratings: {
    service: 4.8,
    delivery: 4.5,
    quality: 4.9,
  },
};

for (const [i, { name }] of store.products.entries()) {
  console.log(`Product ${i + 1} : ${name}`);
}
let totalProdukTerjual = 0;
for (const { sold } of store.products) {
  totalProdukTerjual += sold;
}
console.log(`Total Produk Terjual : ${totalProdukTerjual}`);

let totalRating = 0;
for (const rating of Object.values(store.ratings)) {
  totalRating += rating;
}
const avgRating = totalRating / Object.values(store.ratings).length;
console.log(`Average Rating : ${avgRating}`);

for (const [i, values] of Object.entries(store.ratings)) {
  console.log(`Rating for ${i} : ${values}`);
}

const saleBasedOnCategory = {};

for (const { category, sold } of store.products) {
  // console.log(category, sold);

  if (saleBasedOnCategory[category]) {
    saleBasedOnCategory[category] += sold;
  } else {
    saleBasedOnCategory[category] = sold;
  }
}

console.log(saleBasedOnCategory);
