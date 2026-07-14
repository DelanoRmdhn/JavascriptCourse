'use strict';

/* 
WEEK 3 : IMPLEMENTING GAME LOGIC

berikut ini adalah beberapa game logic yang diperlukan : 
1. buat sebuah angka acak dengan rentang dari 1 - 10
2. menunjukan apakah input user benar, lebih kecil, atau lebih besar dari angka tebakan yang di generate

*/

//Variabel
let randomNumber, currentScore, highscore;
let isPlaying = true;

//TAG HTML yang mau dimanipulasi
const inputNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.btn.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btnReset = document.querySelector('.btn.again');
const highscoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');
const numberEl = document.querySelector('.number');

const initializeGame = function () {
  //Reset seluruh variabel
  isPlaying = true;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;

  //Reset elemen elemen text
  message.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  inputNumber.value = '';
  score.textContent = currentScore;

  //Reset Style yang dimanipulasi
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
};

//jalankan state
initializeGame();

//FUNCTION UNTUK BTN CHECK
btnCheck.addEventListener('click', function () {
  if (isPlaying) {
    //ambil hasil inputan user
    const inputtedNumber = Number(inputNumber.value);

    //Validasi Input Kosong
    if (!inputtedNumber) {
      message.textContent = `❌ Input Your Guess!`;
    }
    //validasi input < 1 & > 20
    else if (inputtedNumber < 1 || inputtedNumber > 20) {
      message.textContent = `❌ Number must be between 1 - 20.`;
    }
    //pengecekan > || <
    else if (inputtedNumber !== randomNumber && currentScore > 0) {
      message.textContent =
        inputtedNumber > randomNumber ? `📈 Too High! ` : `📉 Too Low!`;
      currentScore--;
      score.textContent = currentScore;
    }
    //Kondisi Menang
    else if (inputtedNumber === randomNumber && currentScore > 0) {
      message.textContent = `🥇 Correct !`;
      score.textContent = currentScore;
      numberEl.textContent = randomNumber;

      //Pengecekan Highscore
      if (currentScore > highscore) {
        highscore = currentScore;
        highscoreEl.textContent = currentScore;
      }

      //Manipulasi Style CSS
      bodyEl.style.backgroundColor = '#60b347';
      numberEl.style.width = '30rem';

      isPlaying = false;
    }

    if (currentScore <= 0) {
      message.textContent = `GAME OVER`;
      currentScore = 0;
      score.textContent = currentScore;
      isPlaying = false;
    }
  }
});

btnReset.addEventListener('click', function () {
  initializeGame();
});
