'use strict';

//5. FILTER : digunakan untuk memilih elemen elemen dari sebuah array yang memenuhi sebuah kondisi tertentu. kemudian si truthy values tersebut akan disimpan pada sebuah array. callback dari function filter HARUS menghasilkan sesuatu yang dianggap true / false (boolean).

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const getDeposits = movements.filter(function (move) {
  return move > 0;
});

const getWithdrawals = movements.filter(move => move < 0);

console.log(getDeposits);
console.log(getWithdrawals);
