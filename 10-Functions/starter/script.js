'use strict';

//2. Higher Order Function
const sopDasar = function () {
  console.log(`1. Cuci Tangan Menggunakan Sabun`);
  console.log(`2. Pakai Masker dan Pelindung Kepala`);
  console.log(`3. Memakai Kacamata Pelindung`);
};

const masakPizza = function () {
  console.log('Pizza Sedang dimasak');
};

const masakBurger = function () {
  console.log('Burger Sedang dimasak');
};

const masakMakanan = function (jenisMasakan) {
  sopDasar();
  jenisMasakan();
};

masakMakanan(masakBurger);
masakMakanan(masakPizza);

//Contoh Lainnya
const foods = ['Sop Sapi', 'Ayam bakar'];
const masakApa = function (jenisMakanan) {
  for (const makanan of jenisMakanan) {
    console.log(`${makanan} Sedang Dibuat!`);
  }
};

const mariMasak = function (makanan, fn) {
  console.log(`Cuci Tangan`);
  console.log(`Siapkan Peralatan Memasak`);
  fn(makanan);
};

mariMasak(foods, masakApa);
