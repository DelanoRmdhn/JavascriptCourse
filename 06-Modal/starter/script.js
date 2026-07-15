'use strict';

/* 
WEEK 3 DAY 12 : INTERAKSI MODAL WINDOW 

gunakan document.querySelectorAll() apabila sebuah elemen memiliki sebuah class dengan nama yang sama dan elemen2 tersebut mau kita lakukan manipulasi.

dia merupakan sebuah nodeList, dia mirip array tapi bukanlah sebuah array.

//CARA MEMANIPULASI SEBUAH CLASS 
kita bisa melakukan manipulasi baik itu menambah,menghapus,cek,dll sebuah class. kita bisa menggunakan classList.

//CALLBACK FUNCTION : Callback adalah sebuah function yang dikirim sebagai argumen ke function lain, lalu function tersebut akan dipanggil oleh function penerima pada waktu yang tepat.

*/

//contoh callback function :
const delano = function (callback) {
  let nama = 'delano';
  console.log(`nama saya ${nama}, nama kamu siapa?`);

  const a = callback(nama);
  console.log(`Hai Juga ${a}!`);
};

const panggilIlham = function (namaKamu) {
  let namaSaya = 'ilham';
  console.log(`Halo ${namaKamu}, nama saya ${namaSaya}`);
  return namaSaya;
};

delano(panggilIlham);

//////////////////////////////////////////////////////////

//Simpan elemen kedalam sebuah variable
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//Function Pengecekan keypress
const checkKeyPressed = function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
};

//Function tutup Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Buka Modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('clicked!');

    //Manipulasi class modal & overlay
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//Tutup Modal dengan klik btnCloseModal , klik overlay, dan ketika user klik 'Escape'
//PENERAPAN CALLBACK FUNCTION PADA STUDI KASUS MODAL
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', checkKeyPressed);
