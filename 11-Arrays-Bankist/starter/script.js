'use strict';

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//GLOBAL VARIABLE
let currentAccount;
let sorted = false;

//Buat Username untuk tiap akun
const generateUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(char => char[0])
      .join('');
  });
};

generateUsernames(accounts);

//Fitur Login
const login = function (e) {
  e.preventDefault();
  //get value
  const username = inputLoginUsername.value;
  const pin = inputLoginPin.value;

  //verifikasi username dan pin
  currentAccount = verifyUser(username, pin);

  //Tampilkan Informasi Informasi Akun
  if (currentAccount) {
    showAccountInformation(currentAccount);
  } else return;
};
btnLogin.addEventListener('click', login);

//Fitur Transfer
const transfer = function (e) {
  e.preventDefault();

  const inputDestinationAccount = inputTransferTo.value;
  const transferAmount = Number(inputTransferAmount.value);

  const destinationAccount = verifyUsername(inputDestinationAccount);
  console.log(destinationAccount);

  if (!destinationAccount) return;

  //validate Transfer
  const isValid = validateTransfer(
    currentAccount,
    destinationAccount,
    transferAmount,
  );

  if (!isValid) return;
  //lakukan transfer dan update UI
  transferBalance(currentAccount, destinationAccount, transferAmount);
  showAccountInformation(currentAccount);
};

btnTransfer.addEventListener('click', transfer);

//Fitur Loan
const loan = function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  const loanApproved = currentAccount.movements.some(
    movement => movement >= loanAmount * 0.1,
  );

  if (loanAmount > 0 && loanApproved) {
    currentAccount.movements.push(loanAmount);
    showAccountInformation(currentAccount);
  }
};

btnLoan.addEventListener('click', loan);

//Fitur Tutup Account
const closeAccount = function (e) {
  e.preventDefault();

  const inputUsername = inputCloseUsername.value;
  const inputPin = inputClosePin.value;

  if (
    verifyUser(inputUsername, inputPin) &&
    currentAccount.username === inputUsername
  ) {
    const getIndex = accounts.findIndex(acc => acc.username === inputUsername);

    accounts.splice(getIndex, 1);
    currentAccount = null;

    containerApp.style.opacity = 0;
    inputClosePin.value = '';
    inputCloseUsername.value = '';
    labelWelcome.textContent = `Log in to get started`;
  }
};

btnClose.addEventListener('click', closeAccount);

//FITUR SORT
const sort = function (e) {
  if (!sorted) {
    displayTransactionHistory(
      [...currentAccount.movements].sort((a, b) => a - b),
    );
    sorted = true;
  } else {
    displayTransactionHistory(currentAccount.movements);
    sorted = false;
  }
};

btnSort.addEventListener('click', sort);

//HELPER FUNCTION
const validateTransfer = function (
  account,
  destinationAccount,
  transferAmount,
) {
  //Dapatkan Jumlah Saldo currentAccoun
  const currentBalance = calcCurrentBalance(account.movements);
  console.log(currentBalance);

  //Validasi berupa : transferAmount harus > 0, currentBalance > transferAmount & gaboleh transfer ke diri sendiri
  return (
    transferAmount > 0 &&
    currentBalance >= transferAmount &&
    destinationAccount.username !== account.username
  );
};

const transferBalance = function (
  currentAccount,
  destinationAccount,
  transferAmount,
) {
  currentAccount.movements.push(-transferAmount);

  destinationAccount.movements.push(transferAmount);
};

const verifyUsername = function (inputUsername) {
  return accounts.find(({ username }) => inputUsername === username);
};
const verifyUser = function (inputUsername, inputPin) {
  return accounts.find(
    acc => acc.username === inputUsername && acc.pin === Number(inputPin),
  );
};

const showAccountInformation = function (account) {
  //styling
  containerApp.style.opacity = 1;
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  labelWelcome.textContent = `Good Afternoon, ${account.owner.split(' ')[0]}!`;

  //displaying account Information
  displayTransactionHistory(account.movements);
  const balance = calcCurrentBalance(account.movements);
  labelBalance.textContent = `${balance}€`;

  accountSummary(account);
};

//Tampilkan History Transaksi
const displayTransactionHistory = function (movements) {
  //Kosongin Semua elemen yang membungkus class movements
  containerMovements.innerHTML = '';

  // tampilkan transaksi ke halaman
  movements.forEach(function (move, i) {
    //1. pisahkan tipe transaksi
    const transactionType = move >= 0 ? 'deposit' : 'withdrawal';
    //2. tag HTML yang mau dimanipulasi & menampilkan value sesuai tipe transaksi
    const displayMovement = `
    <div class="movements__row">
    <div class="movements__type movements__type--${transactionType}">${i + 1} ${transactionType.toUpperCase()}</div>
    <div class="movements__value">${move}</div>
    </div>
    `;

    //3. Masukin hasil manipulasi ke containerMovements agar tampil pada halaman
    containerMovements.insertAdjacentHTML('afterbegin', displayMovement);
  });
};

//Hitung & Tampilkan Saldo
const calcCurrentBalance = function (movements) {
  return movements.reduce((acc, move) => acc + move, 0);
};

// Hitung & Tampilkan accountSummary
const accountSummary = function (account) {
  //incomes
  const income = account.movements
    .filter(balance => balance > 0)
    .reduce((acc, balance) => acc + balance, 0);
  labelSumIn.textContent = `${income}€`;

  const outcome = account.movements
    .filter(balance => balance < 0)
    .reduce((acc, balance) => acc + balance);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = income * (account.interestRate / 100);
  labelSumInterest.textContent = `${interest}€`;
};
