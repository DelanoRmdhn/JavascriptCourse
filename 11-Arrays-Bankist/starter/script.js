'use strict';

//6. REDUCE : digunakan untuk meringkas semua elemen pada array menjadi 1 nilai.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalBalance = movements.reduce((sum, balance, i) => {
  console.log(`Iteration ${i} : ${sum}`);
  return (sum += balance);
}, 0);

console.log(totalBalance);
