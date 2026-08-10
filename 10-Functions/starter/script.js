'use strict';

//LATIHAN SOAL : CALL APPLY

/*
🟢 LEVEL 1 — Memahami this

Diberikan:
const garuda = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GA',
  bookings: [],
};

const citilink = {
  airlineName: 'Citilink',
  iataCode: 'QG',
  bookings: [],
};

const bookFlight = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`
  );
};
Tugas:

Gunakan call() untuk membuat:

Delano booked a seat on Garuda Indonesia flight GA10

Kemudian gunakan call() lagi untuk membuat:

Budi booked a seat on Citilink flight QG20
Syarat:
Jangan ubah function bookFlight.
Jangan membuat function baru.
Harus menggunakan call().
*/

const garuda = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GA',
  bookings: [],
};

const citilink = {
  airlineName: 'Citilink',
  iataCode: 'QG',
  bookings: [],
};

const bookFlight = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`,
  );
};

bookFlight.call(garuda, 10, 'Delano');
bookFlight.call(citilink, 20, 'Budi');

/*
🟢 LEVEL 2 — call() + Manipulasi Object

Sekarang function-nya:

const bookFlight = function (flightNum, name) {
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    name,
  });

  console.log(
    `${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`
  );
};

Dengan object:

const garuda = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GA',
  bookings: [],
};

const citilink = {
  airlineName: 'Citilink',
  iataCode: 'QG',
  bookings: [],
};
Tugas:

Gunakan satu function bookFlight untuk melakukan:

Garuda:
- Delano → GA10
- Andi → GA20

Citilink:
- Budi → QG30
- John → QG40

Setelah itu, ketika:

console.log(garuda.bookings);
console.log(citilink.bookings);

hasilnya harus sesuai dengan object masing-masing.
*/

const bookFlight2 = function (flightNum, name) {
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    name,
  });

  console.log(
    `${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`,
  );
};

bookFlight2.call(garuda, 10, 'Delano');
bookFlight2.call(garuda, 20, 'Andi');

bookFlight2.call(citilink, 30, 'Budi');
bookFlight2.call(citilink, 40, 'John');

console.log(garuda.bookings);
console.log(citilink.bookings);

/*
Sekarang perusahaan memiliki data booking dalam bentuk array:

const garudaBooking = [35, 'Rangga'];

const citilinkBooking = [72, 'Fadhil'];

Gunakan function yang sama:

const bookFlight = function (flightNum, name) {
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    name,
  });

  console.log(
    `${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`
  );
};
Tugas:

Gunakan apply() untuk memasukkan:

Rangga → Garuda flight GA35
Fadhil → Citilink flight QG72
*/

const garudaBooking = [35, 'Rangga'];
const citilinkBooking = [72, 'Fadhil'];

bookFlight2.apply(garuda, garudaBooking);
bookFlight2.apply(citilink, citilinkBooking);

/*
Sekarang terdapat kode:

'use strict';

const garuda = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GA',
  bookings: [],
};

const bookFlight = function (flightNum, name) {
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    name,
  });

  console.log(
    `${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`
  );
};

const bookingData = ['Ilham Ramadhan', 88];

bookFlight.apply(garuda, bookingData);

Program berjalan, tetapi hasilnya:

Ilham Ramadhan booked a seat on Garuda Indonesia flight GAIlham Ramadhan

dan booking-nya juga salah.

Tugas:

Perbaiki program tersebut hanya dengan mengubah bagian pemanggilan apply().

Function bookFlight tidak boleh diubah.
*/

const bookingData = [88, 'Ilham Ramadhan'];

bookFlight2.apply(garuda, bookingData);

//debugging berupa switch / tukar urutan index array bookingData dan sesuaikan dengan parameter yang ada di function bookFlight2

/*
Sekarang kita naik ke kasus yang lebih realistis.

Bayangkan kamu membuat sistem penerbangan sederhana.

const garuda = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GA',
  bookings: [],
};

const citilink = {
  airlineName: 'Citilink',
  iataCode: 'QG',
  bookings: [],
};

const lionAir = {
  airlineName: 'Lion Air',
  iataCode: 'JT',
  bookings: [],
};

Kamu memiliki satu function umum:

const createBooking = function (flightNum, passenger, seatClass) {
  const booking = {
    flight: `${this.iataCode}${flightNum}`,
    passenger,
    seatClass,
  };

  this.bookings.push(booking);

  console.log(
    `${passenger} berhasil booking ${this.airlineName} ${this.iataCode}${flightNum} (${seatClass})`
  );
};

Kemudian sistem menerima data dari berbagai sumber:

const booking1 = [10, 'Delano Ramadhan', 'Business'];

const booking2 = [25, 'Ilham Ramadhan', 'Economy'];

const booking3 = [40, 'Gofar Hilman', 'Premium Economy'];
Tugas:

Gunakan apply() untuk:

booking1 → Garuda
booking2 → Citilink
booking3 → Lion Air

Sehingga:

console.log(garuda.bookings);
console.log(citilink.bookings);
console.log(lionAir.bookings);

masing-masing hanya memiliki booking miliknya sendiri.

Batasan:

Kamu hanya boleh menggunakan:

apply()
function
object
array
this
push()
template literal

Tidak boleh membuat function tambahan.
*/

const garuda2 = {
  airlineName: 'Garuda Indonesia',
  iataCode: 'GA',
  bookings: [],
};

const citilink2 = {
  airlineName: 'Citilink',
  iataCode: 'QG',
  bookings: [],
};

const lionAir = {
  airlineName: 'Lion Air',
  iataCode: 'JT',
  bookings: [],
};

const createBooking = function (flightNum, passenger, seatClass) {
  const booking = {
    flight: `${this.iataCode}${flightNum}`,
    passenger,
    seatClass,
  };

  this.bookings.push(booking);

  console.log(
    `${passenger} berhasil booking ${this.airlineName} ${this.iataCode}${flightNum} (${seatClass})`,
  );
};
const booking1 = [10, 'Delano Ramadhan', 'Business'];
const booking2 = [25, 'Ilham Ramadhan', 'Economy'];
const booking3 = [40, 'Gofar Hilman', 'Premium Economy'];

createBooking.apply(garuda2, booking1);
createBooking.apply(citilink2, booking2);
createBooking.apply(lionAir, booking3);

console.log(garuda.bookings);
console.log(citilink.bookings);
console.log(lionAir.bookings);
