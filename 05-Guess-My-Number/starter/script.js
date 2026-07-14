'use strict';

/* 
WEEK 3 : IMPLEMENTING GAME LOGIC

berikut ini adalah beberapa game logic yang diperlukan : 
1. buat sebuah angka acak dengan rentang dari 1 - 10
2. menunjukan apakah input user benar, lebih kecil, atau lebih besar dari angka tebakan yang di generate

*/

//generate angka random dari 1 - 20
const randomNumber = Math.trunc(Math.random() * 20) + 1;

//simpan score
let currentScore = 10;

//TAG HTML yang mau dimanipulasi
const inputNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.btn.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');

console.log(randomNumber);
//FUNCTION UNTUK BTN CHECK
btnCheck.addEventListener('click', function () {
  //ambil hasil inputan user
  const inputtedNumber = Number(inputNumber.value);

  console.log(typeof inputtedNumber, inputtedNumber);

  //logic game
  if (!inputtedNumber) {
    message.textContent = `❌ Input Your Guess!`;
  } else if (inputtedNumber < 1 || inputtedNumber > 20) {
    message.textContent = `❌ Number must be between 1 - 20. your guess : ${inputtedNumber}`;
  } else if (inputtedNumber !== randomNumber && currentScore > 0) {
    message.textContent =
      inputtedNumber > randomNumber ? `📈 Too High! ` : `📉 Too Low!`;
    currentScore--;
    score.textContent = currentScore;
    console.log(currentScore);
  } else if (inputtedNumber === randomNumber && currentScore > 0) {
    message.textContent = `🥇 Correct !`;
    score.textContent = currentScore;
    console.log(currentScore);
  }

  if (currentScore <= 0) {
    message.textContent = `GAME OVER`;
    currentScore = 0;
    score.textContent = currentScore;
  }
});
