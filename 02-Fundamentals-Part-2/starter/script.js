"use strict";

//DAY 7

/* INTRODUCTION TO ARRAY 
Array adalah sebuah struktur data yang dimana kita bisa menyimpan sebuah value di dalamnya. kalau di analogikan, array seperti sebuah Box Mainan yang di dalamnya memiliki berbagai jenis mainan.

untuk mengakses nilai yang ada di dalam array kita bisa mendapatkannya dengan mengetahui index / posisi si nilai yang ingin kita ambil. indexing pada array dimulai dari 0 bukan 1.
*/

const boxMainan = ["Boneka", "PS5", "Xbox One", "Mobil-Mobilan"];

console.log(boxMainan[0]); // untuk mengakses Boneka
console.log(boxMainan[boxMainan.length - 1]); //di dalam [] kita bisa menambahkan expression juga

//contoh implementasi
const informasiSaya = [
  "Delano",
  "Delano Bariq Ramadhan",
  2006,
  54,
  177,
  "S1 Rekayasa Perangkat Lunak",
];

const hitungUsia = (tahunLahir) => 2026 - tahunLahir;

console.log(
  `Haloo Semuanyaa, Perkenalkan nama saya ${informasiSaya[1]}. Biasa dipanggil ${informasiSaya[0]}.saya lahir pada tahun ${informasiSaya[2]}, jadi umur saya saat ini ${hitungUsia(informasiSaya[2])} tahun. dengan tinggi badan ${informasiSaya[4]} cm dan berat ${informasiSaya[3]}. Saya merupakan mahasiswa aktif di Telkom University, dan sedang mengambil jurusan ${informasiSaya[informasiSaya.length - 1]}.`,
);

//contoh implementasi
const dataTahunLahir = [1991, 2005, 2001, 1998];
const dataUmur = [
  hitungUsia(dataTahunLahir[0]),
  hitungUsia(dataTahunLahir[1]),
  hitungUsia(dataTahunLahir[2]),
  hitungUsia(dataTahunLahir[3]),
];

console.log(
  `Jika saya lahir pada tahun ${dataTahunLahir[0]} maka umur saya ${dataUmur[0]} tahun.`,
);
console.log(
  `Jika saya lahir pada tahun ${dataTahunLahir[1]} maka umur saya ${dataUmur[1]} tahun.`,
);
console.log(
  `Jika saya lahir pada tahun ${dataTahunLahir[2]} maka umur saya ${dataUmur[2]} tahun.`,
);
console.log(
  `Jika saya lahir pada tahun ${dataTahunLahir[3]} maka umur saya ${dataUmur[3]} tahun.`,
);

//Melakukan manipulasi / perubahan isi pada array
const temanSaya = ["fairuz", "ezra", "nandana"];
temanSaya[temanSaya.length - 1] = "Tiansen";
console.log(temanSaya[2]);

const arrayCobaCoba = [
  "Delano",
  arrayCobaCoba[0] === "Delano" ? true : false,
  hitungUsia(2006),
];

console.log(arrayCobaCoba);
