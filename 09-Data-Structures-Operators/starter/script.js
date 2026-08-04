'use strict';

//////////////////////////////
//WORKING WITH STRING
//////////////////////////////

//split
const namaPanjang = 'Delano Bariq Ramadhan';
const [namaDepan, namaTengah, namaAkhir] = namaPanjang.split(' ');
console.log(namaDepan, namaTengah, namaAkhir);

//join
const boardingPass = [
  'Tuan.',
  namaDepan,
  namaTengah,
  namaAkhir.toUpperCase(),
].join(' ');
console.log(boardingPass);

//real case
const kapitalisasiNama = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(nameUpper.join(' '));
};

kapitalisasiNama('delano bariq ramadhan');
kapitalisasiNama('fairuz hamzah');
kapitalisasiNama('ezra firsyabani napitupulu nandana aryanta');

//padStart
console.log(namaPanjang.padStart(30, '*'));

//padEnd
console.log(namaPanjang.padEnd(30, '*'));

//contoh real case
const sensorNIK = function (nik) {
  const getNik = String(nik);
  const lastFourNumber = getNik.slice(-4);

  return lastFourNumber.padStart(getNik.length, '*');
};

console.log(sensorNIK(3674021910060009));
console.log(sensorNIK('2919141923412919012'));

//repeat
const string = `Karena Cuaca Buruk, seluruh Penerbangan Maskapai ditunda....`;
console.log(string.repeat(5));
