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

// const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//2.findIndex() : digunakan untuk mencari index / posisi dari suatu elemen pada sebuah array yang memenuhi kondisi yang diberikan.

const soal1 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      username: 'js',
      movements: [200, 450, -400],
    },
    {
      owner: 'Jessica Davis',
      username: 'jd',
      movements: [5000, -150],
    },
    {
      owner: 'Steven Thomas Williams',
      username: 'stw',
      movements: [200, -200, 340],
    },
    {
      owner: 'Sarah Smith',
      username: 'ss',
      movements: [430, 1000],
    },
  ];

  const removeAccount = function (usn) {
    const getAccountIndex = accounts.findIndex(
      ({ username }) => username === usn,
    );

    if (getAccountIndex === -1) return;

    accounts.splice(getAccountIndex, 1);
    accounts.forEach(acc => console.log(acc.owner.split(' ')[0]));
  };

  removeAccount('stw');
};

soal1();

const soal2 = function () {
  const transactions = [
    { id: 101, type: 'deposit', amount: 500 },
    { id: 102, type: 'withdrawal', amount: 200 },
    { id: 103, type: 'deposit', amount: 1000 },
    { id: 104, type: 'withdrawal', amount: 300 },
  ];

  const cancelTransaction = function (transactionId) {
    const getTransactionIndex = transactions.findIndex(
      ({ id }) => id === transactionId,
    );

    if (getTransactionIndex === -1) return;

    transactions.splice(getTransactionIndex, 1);
    transactions.forEach(({ id, type, amount }) =>
      console.log(`${id} ${type} ${amount}`),
    );
  };
  cancelTransaction(103);
  cancelTransaction(999);
};
soal2();
