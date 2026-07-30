'use strict';

//Bagimana Manjemen Memori di Javascript terjadi :
/* 
Dibagi menjadi 2 jenis : 
1. Primitive valua = apabila nilai yang disimpan pada sebuah variabel berupa tipe data primitif (number,string,boolean,undefined,null,symbol,big int) maka dia berupa primitves value. yang dimana apabila kita menyalin variabel tersebut dan dilakukan perubahan pada variabel yang menyalinnya, maka variabel awal tidak akan berimbas pada perubahan tersebut.
*/
let a = 10;
let b = a;
a += 10;
b -= 5;
console.log(a);
console.log(b);

/* 
2. Reference Values : nilai yang disimpan pada sebuah variabel berupa object (object,array,function,dll). dia tidak menyimpan object melainkan sebuah reference yang menunjuk pada object yang tersimpan pada memory heap. ini berarti apabila kita lakukan penyalinan sebuah object pada sebuah variabel, maka nilai tersebut merupakan reference dari variabel aslinya dan apabila kita lakukan perubahan di salinan variable tersebut, maka perubahan akan tetap berimbas pada si variabel aslinya.
*/

let nomorHoki = [1, 2, 3, 4, 5];
let nomorHokiSaya = nomorHoki;
nomorHokiSaya.push(10);

console.log(nomorHoki);
console.log(nomorHokiSaya);

const person = {
  name: 'Delano',
};

const person2 = person;
person2.name = 'Ilham';

console.log(person);
console.log(person2);

//Ini bisa terjadi karena dia value dia merreference ke memory heap yang sama, jadi apabila dilakukannya perubahan, maka yang dirubah sebenarnya adalah nilai / isi dari si reference

//Cara untuk menyalin reference value berupa NILAI dan bukan REFERENCE-nya REST OEPRATOR SHALLOW COPY
const delano = {
  namaPanjang: 'Delano Bariq Ramadhan',
  tahunLahir: 2006,
  usia: function () {
    console.log(2026 - this.tahunLahir);
  },
};

const bimo = { ...delano };
bimo.namaPanjang = 'Bimo Cahyo Utomo';
bimo.tahunLahir = 2005;

console.log(delano, delano.usia());
console.log(bimo, bimo.usia());

//CASE ARRAY
const tahunLahir = [1976, 1981, 2006, 2009, 2017];
const tahunLahir2 = [...tahunLahir];

tahunLahir.push(2010);

console.log(tahunLahir);
console.log(tahunLahir2);

//Case dimana apabila properti dari objects adalah object DEEP COPY
const x = {
  nim: 103022400045,
  number: [1, 2, 3, 4, 5, 6],
};

const y = structuredClone(x);
y.number.push(12);
console.log(x.number);
console.log(y.number);
