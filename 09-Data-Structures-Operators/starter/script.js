'use strict';

//SHORT CIRCUITING OR (||) & AND (&&)

//OR
const nama = 'Delano';
console.log(nama || 'Ilham Wardana');

const user = {
  nama: 'Delano',
  tahunLahir: 2006,
  hitungUsia: function () {
    console.log(2026 - this.tahunLahir);
  },
};

user.hitungUsia() || 24;

//AND
user.tahunLahir && user.hitungUsia();

// ??
let number = 0;
console.log(number || 19);
console.log(number ?? 19);
