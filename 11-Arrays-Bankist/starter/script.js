const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//4. some() & every()

/*
  1. some() : difunakan untuk melakukan pengecekan apakah ada MINIMAL SATU elemen dalam array yang memenuhi kondisi. dia mengembalikan nilai true / false 
  2. every() : digunakan untuk melakukan pengecekan apakah SEMUA elemen dalam array memenuhi kondisi. dia mengembalikan true / false
*/

//CONTOH PENGGUNAAN SOME
const anyDeposit = movements.some(move => move > 0);
console.log(anyDeposit);

//CONTOH PENGGUNAAN EVERY
const depositOnly = account4.movements.every(move => move > 0);
const withdrawalsOnly = account4.movements.every(move => move < 0);

console.log(depositOnly);
console.log(withdrawalsOnly);

//LATIHAN SOAL

const soal1Some = function () {
  const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const hasLargeWithdrawal = function (movements) {
    return movements.some(move => move <= -500);
  };
  const answer = hasLargeWithdrawal(movements2);
  console.log(`Apakah ada penarikan lebih dari 500 :`, answer);
};
soal1Some();

const soal2Some = function () {
  const accounts2 = [
    {
      owner: 'Jonas',
      movements: [200, 450, -400],
    },
    {
      owner: 'Jessica',
      movements: [5000, -150],
    },
    {
      owner: 'Steven',
      movements: [200, -200, 340],
    },
    {
      owner: 'Sarah',
      movements: [430, 1000, 700],
    },
  ];

  const hasRichAccount = function (accounts) {
    return accounts.some(acc => {
      const totalBalance = acc.movements.reduce((acc, move) => acc + move, 0);

      return totalBalance > 4000;
    });
  };

  console.log(hasRichAccount(accounts2));
};

soal2Some();

const soal3Every = function () {
  const movements = [200, 450, 3000, 1300];

  const allDeposits = function (movements) {
    return movements.every(move => move > 0);
  };

  console.log(allDeposits(movements));
};

soal3Every();

const soal4Every = function () {
  const accounts = [
    {
      owner: 'Jonas',
      pin: 1111,
      movements: [200, 450, -400],
    },
    {
      owner: 'Jessica',
      pin: 2222,
      movements: [5000, -150],
    },
    {
      owner: 'Steven',
      pin: 3333,
      movements: [200, -200, 340],
    },
  ];

  const allAccountsHavePin = function (accounts) {
    return accounts.every(acc => typeof acc.pin === 'number');
  };

  console.log(allAccountsHavePin(accounts));
};

soal4Every();
