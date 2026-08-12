'use strict';

// LECTURES #1 Array Method

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//SLICE : Mengekstraksi sebuah bagian dari array (tergantung dari isi argumen) tetapi tidak merubah array aslinya.
const numArr = [19, 10, 4, 5, 7];
const get3Num = numArr.slice(0, 3);

console.log(get3Num);
console.log(numArr); //array numArr tidak berubah

//SPLICE : Mengekstraksi sebuah bagian dari array (tergantung dari isi argumen) dan MERUBAH bentuk array aslinya

// const get2Num = numArr.splice(0, 2);

// console.log(get2Num); // 2 index awal dikeluarkan dari array numArr dan disimpan ke get2Num
// console.log(numArr); // 2 index diawal hilang, menyisakan [4,5,7]

const getAllNum = numArr.splice(0); //ambil semua isi dari array numArr dan simpan di variable getAllNum
console.log(getAllNum);
console.log(numArr); //isinya kosong karena nilainya udah diambil semua sama getAllNum

//REVERSE : membalik urutan nilai pada array. dan MERUBAH bentuk array aslinya
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(alphabet.reverse());
console.log(alphabet);

//concat : Menggabungkan arrays menjadi 1 array. dia sifatnya ga merubah bentuk asli array
const x = [1, 2, 3, 4, 5];
const y = [6, 7, 8, 9, 10];

const xy = x.concat(y);
const xyAlphabet = x.concat(y).concat(alphabet);

console.log(xy);
console.log(xyAlphabet);

//join : Menggabungkan isi array menjadi 1 nilai dan dipisahkan berdasarkan argumennya
const allXy = xy.join(',');
console.log(allXy);
