'use strict';

//This Bekerja pada sebuah function di sebuah method
const objDelano = {
  name: 'Delano',
  tahunLahir: 2006,
  hitungUsia: function () {
    console.log(2026 - this.tahunLahir);
  },
};

const objIlham = {
  tahunLahir: 2010,
  hitungUsia: objDelano.hitungUsia,
};

objDelano.hitungUsia();
objIlham.hitungUsia();

/* 
this tidak terikat pada object saat function dibuat, tetapi ditentukan saat function dipanggil. Karena hitungUsia() dipanggil melalui objIlham, maka this mengacu ke objIlham. Oleh karena itu, this.tahunLahir mengambil nilai objIlham.tahunLahir (2010).
*/

//Penggunaan This pada arrow function
const arrowCase = {
  x: 10,

  getX: function () {
    const arrowFunction = () => console.log(this.x);
    arrowFunction();
  },
};

arrowCase.getX();

const user = {
  name: 'Kurniawan',

  greet: function () {
    setTimeout(() => {
      console.log(`Halo ${this.name}`);
    }, 1000);
  },
};

user.greet();
objDelano.greet = user.greet;
objDelano.greet();

//Penggunaan This pada eventListener

const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn-2');
const changeTextContent = function () {
  console.log(this);
  this.textContent = 'Sudah Diklik!';
};
button.addEventListener('click', changeTextContent);
button2.addEventListener('click', changeTextContent);

//Coba Coba
const y = {
  a: function () {
    const b = () => {
      console.log(this.name);
    };
    b();
  },
};

y.name = objDelano.name;
y.a();
