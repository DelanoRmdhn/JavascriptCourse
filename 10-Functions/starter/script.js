'use strict';

//6. CLOSURE :

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Total Passenger on Board : ${[passengerCount]}`);
  };
};

const booked = secureBooking();
booked();
booked();
booked();

const tambah = function (a, b) {
  const hasilTambah = a + b;
  console.log(`Hasil Tambah : ${hasilTambah}`);
};

const kalkulator = function (angka1, angka2, callback) {
  return function () {
    callback(angka1, angka2);
  };
};

const kalkulatorTambah = kalkulator(10, 20, tambah);
kalkulatorTambah();

const boardPassengers = function (PassengerTotal, waitTime) {
  const divideIntoGroup = PassengerTotal / 3;

  //setTimeout : HOF dan parameter ke 1 adalah callback function.
  setTimeout(function () {
    console.log(
      `Boarding the total passengers : ${PassengerTotal} passengers.`,
    );

    console.log(
      `There are 3 grops, each of them ${divideIntoGroup} passengers per group.`,
    );
  }, waitTime * 1000);

  console.log(`We Will Start Boarding within ${waitTime} seconds.`);
};

boardPassengers(120, 3);
