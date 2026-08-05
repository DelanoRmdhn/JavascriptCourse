'use strict';

//1.DEFAULT PARAMETES : sebuah cara untuk menyetel nila default sebuah argumen pada function.

const bookings = [];

const createBooking = function (
  plane = 'Batik Air',
  passanggers = 10,
  price = 50,
) {
  const grossProfit = passanggers * price;

  const booking = {
    plane,
    passanggers,
    price,
    grossProfit,
  };
  bookings.push(booking);
};

createBooking('Etihad Airways');
createBooking('Garuda Indonesia', 100, 120);
createBooking('Sriwijaya Air', undefined, 60);
createBooking(undefined, undefined, 30);

console.log(bookings);
