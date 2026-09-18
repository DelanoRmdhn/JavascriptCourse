'use strict';

const akun1 = {
  pemilik: 'Rangga Pratama',
  gerakanKas: [
    5000000, 2500000, -1200000, 8000000, -3500000, -500000, 12000000,
  ],
  tanggalTransaksi: [
    '2026-07-15T08:30:00.000Z',
    '2026-07-28T14:15:00.000Z',
    '2026-08-01T10:00:00.000Z',
    '2026-08-10T16:45:00.000Z',
    '2026-08-18T09:20:00.000Z',
    '2026-08-25T11:00:00.000Z',
    '2026-08-30T13:10:00.000Z',
  ],
  pin: 1111,
};

const akun2 = {
  pemilik: 'Fadhil Nugraha Ilman',
  gerakanKas: [3000000, -800000, 4500000, -1500000, 2000000],
  tanggalTransaksi: [
    '2026-08-05T09:00:00.000Z',
    '2026-08-12T13:30:00.000Z',
    '2026-08-19T11:20:00.000Z',
    '2026-08-26T15:40:00.000Z',
    '2026-08-31T08:50:00.000Z',
  ],
  pin: 2222,
};

const daftarAkun = [akun1, akun2];

// STATE GLOBAL
let currentAccount;

// FORMAT
const formatRupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

const formatTanggal = new Intl.DateTimeFormat('id-ID');

// CREATE USERNAME
const createUsername = function (name) {
  return name
    .toLowerCase()
    .split(' ')
    .map(nama => nama.at(0))
    .join('');
};

daftarAkun.forEach(akun => {
  akun.username = createUsername(akun.pemilik);
});

// SHOW UI
const showUI = function () {
  document.querySelector('.app').style.opacity = '1';
};

// CALCULATE & DISPLAY BALANCE
const calcDisplayBalance = function (currentAccount) {
  currentAccount.balance = currentAccount.gerakanKas.reduce(
    (total, gerakan) => total + gerakan,
    0,
  );

  document.querySelector('.balance__value').textContent = formatRupiah.format(
    currentAccount.balance,
  );
};

// SHOW CURRENT DATE
const currentDate = function () {
  document.querySelector('.balance__date').textContent =
    'Per Tanggal: ' + formatTanggal.format(new Date());
};

// CALCULATE MONEY IN
const calcMoneyIn = function (currentAccount) {
  const getMoneyIn = currentAccount.gerakanKas.filter(gerakan => gerakan >= 0);

  const totalBalance = getMoneyIn.reduce(
    (total, gerakan) => total + gerakan,
    0,
  );

  document.querySelector('.summary__value--in').textContent =
    formatRupiah.format(totalBalance);
};

// CALCULATE MONEY OUT
const calcMoneyOut = function (currentAccount) {
  const getMoneyOut = currentAccount.gerakanKas.filter(gerakan => gerakan < 0);

  const totalBalance = Math.abs(
    getMoneyOut.reduce((total, gerakan) => total + gerakan, 0),
  );

  document.querySelector('.summary__value--out').textContent =
    formatRupiah.format(totalBalance);
};

// GET MOVEMENTS
const getMovements = function (currentAccount) {
  return currentAccount.gerakanKas.map((gerakan, i) => ({
    gerakan,
    tanggal: currentAccount.tanggalTransaksi[i],
  }));
};

// DISPLAY MOVEMENTS
const displayBalance = function (movements) {
  const container = document.querySelector('.movements');

  container.innerHTML = '';

  movements.forEach(({ gerakan, tanggal }, i) => {
    const tipe = gerakan > 0 ? 'deposit' : 'withdrawal';
    const labelTipe = gerakan > 0 ? 'MASUK' : 'KELUAR';

    const tanggalFormat = formatTanggal.format(new Date(tanggal));

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${tipe}">
          ${i + 1} ${labelTipe}
        </div>

        <div class="movements__date">
          ${tanggalFormat}
        </div>

        <div class="movements__value">
          ${formatRupiah.format(gerakan)}
        </div>
      </div>
    `;

    container.insertAdjacentHTML('afterbegin', html);
  });
};

// SORT MOVEMENTS
const sortMovements = function () {
  const movements = getMovements(currentAccount);

  const sortedMovements = movements.toSorted((a, b) => a.gerakan - b.gerakan);

  displayBalance(sortedMovements);
};

document.querySelector('.btn-sort').addEventListener('click', sortMovements);

//tarikDana
const withdrawal = function (e) {
  e.preventDefault();

  const inputWithdrawal = Number(
    document.querySelector('.form__input--amount').value,
  );

  if (inputWithdrawal <= 0) return;

  const totalBalance = currentAccount.gerakanKas.reduce(
    (total, gerakan) => total + gerakan,
    0,
  );

  if (inputWithdrawal > totalBalance) return;

  currentAccount.gerakanKas.push(-inputWithdrawal);

  currentAccount.tanggalTransaksi.push(new Date().toISOString());

  displayBalance(getMovements(currentAccount));
  calcDisplayBalance(currentAccount);
  calcMoneyOut(currentAccount);

  document.querySelector('.form__input--amount').value = '';
};

document
  .querySelector('.form__btn--expense')
  .addEventListener('click', withdrawal);

// LOGIN SUCCESS
const isLoggedIn = function (currentAccount) {
  calcDisplayBalance(currentAccount);
  currentDate();
  calcMoneyIn(currentAccount);
  calcMoneyOut(currentAccount);

  const movements = getMovements(currentAccount);

  displayBalance(movements);

  startLogoutTimer();
};

//TIMER LOGOUT
const startLogoutTimer = function () {
  let time = 120;

  const timer = setInterval(() => {
    const menit = Math.trunc(time / 60);
    const detik = time % 60;

    document.querySelector('.timer').textContent =
      `${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;

    time--;

    if (time < 0) {
      clearInterval(timer);
      logout();
    }
  }, 1000);
};

// LOGIN VALIDATION
const validasiLogin = function (e) {
  e.preventDefault();

  const inputUsername = document
    .querySelector('.login__input--user')
    .value.trim()
    .toLowerCase();

  const inputPassword = Number(
    document.querySelector('.login__input--pin').value,
  );

  currentAccount = daftarAkun.find(akun => akun.username === inputUsername);

  if (currentAccount && currentAccount.pin === inputPassword) {
    console.log('login berhasil');

    showUI();
    isLoggedIn(currentAccount);
  } else {
    alert('Username / Password Salah!');
  }

  document.querySelector('.login__input--user').value = '';
  document.querySelector('.login__input--pin').value = '';
};

//LOGOUT
const logout = function () {
  document.querySelector('.app').style.opacity = '0';
  document.querySelector('.login__input--user').value = '';
  document.querySelector('.login__input--pin').value = '';

  clearInterval();
  currentAccount = null;
};

document.querySelector('.login__btn').addEventListener('click', validasiLogin);
