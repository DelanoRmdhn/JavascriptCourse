'use strict';

//4. CALL & APPLY METHOD : adlah method milik function yang digunakan untuk memanggil / menjalankan sebuah function sambil menentukan secara eksplisit nilai this yang akan digunakan function tersebut.

/*
ini sangat berguna ketika mempunyai function yang bersifat umum / reusable tetapi ingin function tersebut bekerja menggunakan data dari object yang berbeda beda. Contoh implementasi penggunaan ada di contoh 2.

PENGGUNAAN METHOD call() : argument diberikan secara satu per satu 

PENGGUNAAN METHOD apply() :argument diberikan dalam bentuk array


*/

// CONTOH 1:
// Function yang awalnya merupakan method suatu object digunakan kembali dengan object lain sebagai `this`.
//  Function tidak disalin, hanya reference-nya yang digunakan.

const garuda = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GWK',
  bookings: [],
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
};

const bookFlight = garuda.book;
const flightData = [115, 'Joan Mir'];
//call
bookFlight.call(citilink, 19, 'John Doe');
bookFlight.call(garuda, 102, 'Delano Ramadhan');

//apply
bookFlight.apply(citilink, [19, 'Paris Hilton']); //kita harus mastiin agar si urutan array cocok dengan parameter function
bookFlight.apply(garuda, flightData);

//CONTOH 2 : Membuat sebuah function umum yang bekerja dengan data/properti sebuah object
const bookedFlight = function (flightNum, name) {
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  console.log(
    `Tiket sudah di booking oleh ${name} dengan penerbangan ${this.airlineName} Nomor Registrasi ${this.iataCode}${flightNum}.`,
  );
};

bookedFlight.call(citilink, 10, 'Ilham Ramadhan');
bookedFlight.call(garuda, 110, 'Gofar Hilman');
console.log(citilink);
console.log(garuda);
