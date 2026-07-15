'use strict';

/* 
WEEK 3 DAY 12 : INTERAKSI MODAL WINDOW 

gunakan document.querySelectorAll() apabila sebuah elemen memiliki sebuah class dengan nama yang sama dan elemen2 tersebut mau kita lakukan manipulasi.

dia merupakan sebuah nodeList, dia mirip array tapi bukanlah sebuah array.

*/

//Simpan elemen kedalam sebuah variable
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('clicked!');
  });
}
