"use strict";

/*DAY 8 

Diving deeper in Object 

1. Function di dalam sebuah object : kita bisa memasukan function ke dalam sebuah object, dengan syarat kita perlu mendeklarasikan function tersebut dalam format function expression / arrow function.

2. this keyowrd pada object: this adalah sebuah keyword di JavaScript yang mereferensikan object yang sedang menjalankan (memanggil) suatu function.
*/

const delano = {
  namaPanjang: "Delano Bariq Ramadhan",
  namaPanggilan: "Delano",
  tahunLahir: 2006,
  nim: 103022400045,
  universitas: "Telkom University",
  teman: ["ilham", "Ali", "Yusuf"],
  pekerjaan: "Mahasiswa",
  simMengemudi: true,

  hitungUsia: function () {
    this.age = 2026 - this.tahunLahir;
    return this.age;
  },

  rangkumanSaya: function () {
    return `${this.namaPanggilan} adalah seorang ${this.pekerjaan} dengan umur ${this.age}, dan dia ${this.simMengemudi === true && this.age >= 17 ? "Punya" : "Tidak Punya"} SIM Mengemudi`;
  },
};

console.log(delano);
console.log(delano);
console.log(delano.hitungUsia()); //ketika function ini dipanggil maka di dalam function hitungUsia akan membuat properti baru berupa age yang menyimpan hasil perhitungannya
console.log(delano.age); // jadi kita bisa langsung akses properti age tanpa perlu jalanin function hitungUsia lagi, tapi kalau function hitungUsia belum di jalanin maka properti age tidak akan punya nilai / undefined.
console.log(delano.simMengemudi);

console.log(delano.rangkumanSaya());

//Manipulasi dalam Object
//1. menambah sebuah properti baru pada object
delano.status = "Jomblo";

//2. Mengubah sebuah properti pada object
delano.status = "Jomblo happy";

//3. Menghapus sebuah properti pada object
delete delano.status;
