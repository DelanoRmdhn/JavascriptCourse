'use strict';

//IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) : Adalah sebuah function yang langsung dipanggil / dijalankan tanpa perlu disimpan kedalam sebuah variable. yang dimana function ini akan langsung dipanggil ketika expressionnya dibuat, sehingga kita tidak menyimpan referensi function tersebut untuk dipanggil lagi.

//function biasa
const sayHello = function (sapaan) {
  console.log(`${sapaan}, Delano!`);
};

sayHello('Halo');

//IIFE
(function (sapaan) {
  console.log(`${sapaan}, Delano!`);
})('Haii');

(sapaan => console.log(`${sapaan}, Delano!`))('Hei Bro');

/*
Function diatas langsung dijalankan dan hanya 1x. mereka tidak bisa dipanggil lagi, berbeda dengan deklrasi function biasa yang bisa dipanggil lagi karena function tersebut referensi nya disimpan pada sebuah variable.
*/
