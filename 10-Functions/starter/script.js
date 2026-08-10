'use strict';

//4. BIND : Berbeda dengan method function apply dan call yang LANGSUNG dijalankan, bind tidak langsung dijalankan.

const garuda = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GWK',
  bookings: [],
  planesTotal: 300,
  book: function (flightNum, passangers) {
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passangers });
    console.log(
      `${passangers} booked a seat on ${this.airlineName} flight ${this.iataCode} ${flightNum}`,
    );
  },
};

const citilink = {
  airlineName: 'Citilink',
  iataCode: 'CGK',
  bookings: [],
  planesTotal: 100,
};

//CONTOH PENGAPLIKASIAN DENGAN OBJECT
const bookFlightCitilink = garuda.book.bind(citilink);
bookFlightCitilink(115, 'Delano');
console.log(citilink);

//CONTOH PENGAPLIKASIAN DENGAN DOM
const buyPlane = function () {
  console.log(this);

  this.planesTotal++;
  console.log(this.planesTotal);
};

const citilinkBuyPlane = buyPlane.bind(citilink);

const buyBtn = document.querySelector('.buy');
buyBtn.addEventListener('click', citilinkBuyPlane);

buyBtn.addEventListener('click', buyPlane.bind(garuda));
