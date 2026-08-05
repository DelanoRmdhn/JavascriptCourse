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

const flight = 'GI112';
const delano = {
  nama: 'Delano Bariq Ramadhan',
  noPaspor: 93021848311,
};

const checkin = function (flightNumber, passanggers) {
  flightNumber = 'GI113';
  passanggers.nama = 'Mr. Delano Bariq Ramadhan';

  if (passanggers.noPaspor === 93021848311) {
    console.log(`${passanggers.nama} Berhasil Check In!`);
  } else {
    console.log(`${passanggers.nama} Nomor Pasport Kamu Salah!`);
  }
};

checkin(flight, delano);
console.log(flight);
console.log(delano);

const checkInWithoutChangingObject = function (flightNumber, passanggers) {
  flightNumber = 'GI104';
  const passangger = { ...passanggers };

  if (
    passangger.noPaspor === 93021848311 &&
    passangger.nama === 'Mr. Delano Bariq Ramadhan'
  ) {
    passangger.nama = 'Mr. Delano Bariq Ramadhan';
    alert(`${passangger.nama} Successfully Checked In!`);
  } else {
    alert(`❌ Invalid Name / Pasport Number!`);
  }
};

checkInWithoutChangingObject(flight, delano);
console.log(flight);
console.log(delano);
