'use strict';

//////////////////////////////
//WORKING WITH STRING
//////////////////////////////

const airline = 'Garuda Indonesia GR';
const airlineType = 'Boeing-747';

//1. indexOf
console.log(airline.indexOf('G'));

//2. lastIndexOf
console.log(airline.lastIndexOf('G'));

//3. slice(indexAwal)
console.log(airlineType.slice(7));

//4. slice(indexAwal,indexAkhir)
console.log(airlineType.slice(0, 6));

//Kombinasi
console.log(airline.slice(airline.indexOf('G'), airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));

//5. toLowerCase()
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//contoh real case
let name = 'DeLanO';
const lowerName = name.toLowerCase();
const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
console.log(correctName);

//6. trim
const namaKu = '            Delano Bariq Ramadhan              ';
console.log(namaKu.trim());

//contoh real case
const email = 'del.191006@gmail.com';
const inputEmail = '         DEl.191006@gmaIl.coM \n';

const setEmail = inputEmail.toLowerCase().trim();
console.log(setEmail);
console.log(email === setEmail ? true : false);

//7. replace()
const announcement =
  'Semua Penumpang penerbangan garuda Indonesia diharapkan ke pintu 3.';

console.log(announcement);
console.log(announcement.replace('pintu', 'Gate'));

//real case
const flightPriceDollar = '$100';
const flightPriceIdr = flightPriceDollar
  .replace('$', 'Rp.')
  .replace('100', '1.800.000');

console.log(flightPriceDollar, flightPriceIdr);

//8. includes()
const plane = 'Airbus A320neo';
console.log(plane.includes('neo'));

//9.startsWith()
console.log(plane.startsWith('Airbus'));

//10. endsWith()
console.log(plane.endsWith('neo'));

//contoh case
const generateBoardingPass = function (items) {
  const inputItem = items.toLowerCase();

  if (inputItem.includes('sajam') || inputItem.includes('bazzoka')) {
    console.log(`❌ Kamu dilarang Terbang!`);
  } else {
    console.log(`✅ Kamu diizinkan Terbang`);
  }
};

generateBoardingPass('Saya bawa makanan,Minuman,dan sajam');
generateBoardingPass('Saya bawa baju,celana,dan makanan');
generateBoardingPass('Saya bawa bazzoka,sempak,dan makanan');
