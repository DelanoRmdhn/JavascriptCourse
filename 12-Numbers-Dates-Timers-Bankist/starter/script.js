'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2026-08-21T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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
let sortMode = 0;
let currentAccount;

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
    sortMode = 0;
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
  sortMode = 0;
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
    const now = new Date().toISOString();

    currentAccount.movements.push(loanAmount);
    currentAccount.movementsDates.push(now);
    sortMode = 0;
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
    sortMode = 0;

    containerApp.style.opacity = 0;
    inputClosePin.value = '';
    inputCloseUsername.value = '';
    labelWelcome.textContent = `Log in to get started`;
  }
};

btnClose.addEventListener('click', closeAccount);

//FITUR SORT

const sort = function () {
  if (sortMode === 0) {
    const sortedMovements = [...currentAccount.movements].sort((a, b) => a - b);

    displayTransactionHistory({
      ...currentAccount,
      movements: sortedMovements,
    });
    sortMode = 1;
  } else if (sortMode === 1) {
    const sortedTransaction = currentAccount.movements
      .map((movement, i) => {
        return {
          movement,
          date: currentAccount.movementsDates[i],
        };
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(sortedTransaction);

    const sortedMovements = sortedTransaction.map(
      transaction => transaction.movement,
    );
    const sortedDates = sortedTransaction.map(transaction => transaction.date);

    displayTransactionHistory({
      ...currentAccount,
      movements: sortedMovements,
      movementsDates: sortedDates,
    });

    sortMode = 0;
  }
};
btnSort.addEventListener('click', sort);

//HELPER FUNCTION
const validateTransfer = function (
  account,
  destinationAccount,
  transferAmount,
) {
  //reset sortMode

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
  const now = new Date().toISOString();
  currentAccount.movements.push(-transferAmount);
  currentAccount.movementsDates.push(now);

  destinationAccount.movements.push(transferAmount);
  destinationAccount.movementsDates.push(now);
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
  displayTransactionHistory(account);
  const balance = calcCurrentBalance(account.movements);
  labelBalance.textContent = `${balance}€`;

  accountSummary(account);
};

//Tampilkan History Transaksi
const displayTransactionHistory = function (account) {
  //Kosongin Semua elemen yang membungkus class movements
  containerMovements.innerHTML = '';

  // tampilkan transaksi ke halaman
  account.movements.forEach(function (move, i) {
    //1. pisahkan tipe transaksi
    const transactionType = move >= 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);

    //2. tag HTML yang mau dimanipulasi & menampilkan value sesuai tipe transaksi
    const displayMovement = `
    <div class="movements__row">
    <div class="movements__type movements__type--${transactionType}">${i + 1} ${transactionType.toUpperCase()}</div>
    <div class="movements__date">${formatDate(date)}</div>
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
  // IN
  const income = account.movements
    .filter(movement => movement > 0)
    .reduce((acc, movement) => acc + movement, 0);

  labelSumIn.textContent = `${income.toFixed(2)}€`;

  // OUT
  const outcome = account.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement, 0);

  labelSumOut.textContent = `${Math.abs(outcome).toFixed(2)}€`;

  // INTEREST
  const interest = account.movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const formatDate = function (date) {
  const dayPassed = calcDaysPassed(new Date(), date);

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days Ago`;
  else {
    return `${Intl.DateTimeFormat('en-US').format(date)}`;
  }
};

/////////////////////////
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  weekday: 'long',
};
const formatId = new Intl.DateTimeFormat('en-US', options).format(now);
// const formatNow = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
labelDate.textContent = formatId;
/////////////////////////
