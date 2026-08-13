'use strict';

// LECTURES #1 Array Method

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//2. FOR EACH : Merupakan method milik array yang digunakan untuk menjalankan suatu function SATU KALI untuk setiap elemen di dalam array.

const createTransactionSummary = function () {
  //Wadah Penampung Akhir dari transaksi
  const transactionHistory = [];

  //Wadah penampung klasifikasi jenis transaksi
  const depositHistory = [];
  const withdrawHistory = [];

  //Pengklasifikasian Jenis transaksi : Deposit / Withdraw
  movements.forEach(function (movement, i) {
    if (movement >= 0) {
      depositHistory.push({
        depositId: i + 1,
        amount: movement,
      });
    } else {
      withdrawHistory.push({
        withdrawId: i + 1,
        amount: movement,
      });
    }
  });

  //Masukan hasil pengklasifikasian kedalam wadah penampung akhir
  transactionHistory.push(depositHistory);
  transactionHistory.push(withdrawHistory);

  //kembalikan wadah penampung akhir agar bisa diakses diluar function
  return transactionHistory;
};

const transactionHistory = createTransactionSummary();
console.log(transactionHistory);
