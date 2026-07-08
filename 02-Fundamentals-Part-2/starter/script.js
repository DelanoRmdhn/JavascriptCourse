"use strict";

/*DAY 8 

OBJECT 
selain array terdapat object yang merupakan sebuah struktur data lainnya. Object prinsipnya sama seperti array yakni dia mampu menampung banyak value/expression di dalamnya, namun yang membedakan ia dari array pada bagian mengakses value yang ada di dalamnya.

pada array untuk mengakses value kita menggunakan index.
sedangkan pada object kita bisa sett nama untuk dapat mengakses nilai tersebut.

*/

const delano = {
  namaPanjang: "Delano Bariq Ramadhan",
  namaPanggilan: "Delano",
  nim: 103022400045,
  universitas: "Telkom University",
  teman: ["ilham", "Ali", "Yusuf"],
};

//cara Mengakses sebuah properti pada object
//1. Dot
console.log(delano.namaPanjang);

//2.[] : dengan bracket kita bisa menempatkan expression ke dalamnya
let jenis = "Panggilan";
console.log(delano[`nama${jenis}`]);

console.log(
  `${delano.namaPanggilan} memiliki ${delano.teman.length}, dan teman terdekat saya adalah ${delano.teman[0]}`,
);

const input = prompt(
  `Masukan informasi dari ${delano.namaPanjang} yang ingin kamu ketahui \n(namaPanjang,namaPanggilan,nim,universitas,teman):`,
);

if (delano[input]) {
  console.log(`${input} dari Delano : ${delano[input]}`);
}
