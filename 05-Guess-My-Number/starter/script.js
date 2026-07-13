'use strict';

/* 
WEEK 3 : DOM & EVENTS IN JAVASCRIPT

//EVENTLISTENER 
*/

const btnCheck = document.querySelector('.btn.check');
const inputNumber = document.querySelector('.guess');
const paragraf = document.querySelector('.message');

let guess = [];
btnCheck.addEventListener('click', function () {
  guess.push(inputNumber.value);
  console.log(typeof inputNumber.value);
  console.log(guess);
});

btnCheck.addEventListener('click', function () {
  if (Number(inputNumber.value) === angkaRandom) {
    paragraf.textContent = '🎉Benar!!!';
  } else {
    paragraf.textContent =
      Number(inputNumber.value) > angkaRandom
        ? '⬆ ANGKANYA KEBESARAN!'
        : '⬇ ANGKANYA KEKECILAN!';
  }
});
