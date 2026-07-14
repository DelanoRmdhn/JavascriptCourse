'use strict';

/* 
WEEK 3 : IMPLEMENTING GAME LOGIC

berikut ini adalah beberapa game logic yang diperlukan : 
1. buat sebuah angka acak dengan rentang dari 1 - 10
2. menunjukan apakah input user benar, lebih kecil, atau lebih besar dari angka tebakan yang di generate

*/

//generate angka random dari 1 - 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

//simpan score
let currentScore = 20;
let highscore = 0;

console.log(randomNumber);

//TAG HTML yang mau dimanipulasi
const inputNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.btn.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btnReset = document.querySelector('.btn.again');
const highscoreEl = document.querySelector('.highscore');

//FUNCTION UNTUK BTN CHECK
btnCheck.addEventListener('click', function () {
  //ambil hasil inputan user
  const inputtedNumber = Number(inputNumber.value);

  ///logic game

  //Input Kosong
  if (!inputtedNumber) {
    message.textContent = `❌ Input Your Guess!`;
  }
  //validasi input < 1 & > 20
  else if (inputtedNumber < 1 || inputtedNumber > 20) {
    message.textContent = `❌ Number must be between 1 - 20. your guess : ${inputtedNumber}`;
  }
  //pengecekan > || <
  else if (inputtedNumber !== randomNumber && currentScore > 0) {
    message.textContent =
      inputtedNumber > randomNumber ? `📈 Too High! ` : `📉 Too Low!`;
    currentScore--;
    score.textContent = currentScore;
    console.log(currentScore);
  }
  //Kondisi Menang
  else if (inputtedNumber === randomNumber && currentScore > 0) {
    message.textContent = `🥇 Correct !`;
    score.textContent = currentScore;
    document.querySelector('.number').textContent = randomNumber;

    //Pengecekan Highscore
    if (currentScore > highscore) {
      highscore = currentScore;
      highscoreEl.textContent = currentScore;
    }

    //Manipulasi Style CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  if (currentScore <= 0) {
    message.textContent = `GAME OVER`;
    currentScore = 0;
    score.textContent = currentScore;
  }
});

btnReset.addEventListener('click', function () {
  //Reset currentScore menjadi 20 lagi
  currentScore = 20;
  score.textContent = currentScore;

  //Generate Angka Acak Berbeda
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  //Reset Text
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  inputNumber.value = '';

  //Reset Style yang dimanipulasi
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
