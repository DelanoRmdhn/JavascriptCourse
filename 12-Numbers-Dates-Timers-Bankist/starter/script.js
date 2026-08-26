'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

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
    '2020-07-12T10:51:36.790Z',
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

////////////////////////////////////
//DATE & TIME
////////////////////////////////////

/*
🧪 Challenge 1 — User Registration Date

Kamu sedang membuat sistem registrasi user.

Data user:

const user = {
  name: 'Delano',
  registrationDate: new Date(),
};
🎯 Tugas

Buat function soal1 yang menampilkan:

User          : Delano
Year          : 2026
Month         : 8
Date          : 26
Day of Week   : 3
Hour          : 7
Minute        : 24

Angka di atas adalah contoh berdasarkan waktu saat soal dibuat. Jangan hardcode angka tersebut. Program harus mengambilnya dari registrationDate.

Requirements
Gunakan new Date() untuk mendapatkan waktu registrasi.
Ambil:
tahun
bulan
tanggal
hari dalam minggu
jam
menit
Gunakan method get...() yang sesuai.
Ingat bahwa bulan JavaScript dimulai dari 0.

Ingat perbedaan:

getDate()
getDay()
*/

const soal1 = function () {
  const user = {
    name: 'Delano',
    registrationDate: new Date(),
  };

  console.log(user.registrationDate);
  const year = user.registrationDate.getFullYear();
  const month = user.registrationDate.getMonth() + 1;
  const date = user.registrationDate.getDate();
  const day = user.registrationDate.getDay();
  const hour = user.registrationDate.getHours();
  const minute = user.registrationDate.getMinutes();

  console.log(
    `User \t\t\t : ${user.name}\n` +
      `Year \t\t\t : ${year}\n` +
      `Month \t\t\t : ${month}\n` +
      `Date \t\t\t : ${date}\n` +
      `Day Of Week \t : ${day}\n` +
      `Hour \t\t\t : ${hour}\n` +
      `Minute \t\t\t : ${minute}`,
  );
};

soal1();

/* 
🧪 Challenge 2 — Birthday Information

Buat sebuah object:

const user = {
  name: 'Delano',
  birthDate: new Date(2006, 4, 17),
};
Tugas

Tampilkan:

Name          : Delano
Birth Year    : 2006
Birth Month   : May
Birth Date    : 17

Syarat tambahan: jangan hardcode "May".

Gunakan array:

const months = [
  'January',
  'February',
  'March',
  // ...
];

Kemudian gunakan getMonth() untuk mengambil nama bulan.

💡 Hint

Ingat:

new Date(2006, 4, 17)

bukan April. 😉
*/

const soal2 = function () {
  const user = {
    name: 'Delano',
    birthDate: new Date(2006, 4, 17),
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  console.log(
    `Name \t\t\t : ${user.name}\n` +
      `Birth Year \t\t : ${user.birthDate.getFullYear()}\n` +
      `Birth Month \t : ${months[user.birthDate.getMonth()]}\n` +
      `Birth Date \t\t : ${user.birthDate.getDate()} `,
  );
};

soal2();

/*
🧪 Challenge 3 — Meeting Schedule

Kamu ingin membuat jadwal meeting:

const meeting = new Date(2026, 7, 26, 14, 30);

Buat output:

Meeting Date : 26/08/2026
Meeting Time : 14:30
Requirements

Gunakan:

getFullYear()
getMonth()
getDate()
getHours()
getMinutes()

Untuk sementara jangan menggunakan Intl.DateTimeFormat().

⭐ Bonus

Buat agar tanggal dan waktu selalu memiliki 2 digit.

Misalnya:

08

bukan:

8

Hint:

String(...).padStart(2, '0')
Urutan pengerjaan yang aku sarankan

Jangan langsung kerjakan semuanya.

Mulai:

Challenge 1
   ↓
cek pemahaman get...
   ↓
Challenge 2
   ↓
pahami month index
   ↓
Challenge 3
   ↓
gabungkan Date + formatting
*/

const soal3 = function () {
  const meeting = new Date(2026, 7, 26, 14, 30);

  const date = `${meeting.getDate()}/${String(meeting.getMonth() + 1).padStart(2, '0')}/${meeting.getFullYear()}`;
  const time = `${String(meeting.getHours()).padStart(2, '0')}:${String(meeting.getMinutes()).padStart(2, '0')}`;

  console.log(`Meeting Date \t : ${date}\n` + `Meeting Time \t : ${time}`);
};

soal3();

/*
🧪 Challenge 4 — Days Until Deadline

Kamu sedang membuat sistem deadline tugas kuliah.

const soal4 = function () {
  const today = new Date(2026, 7, 26);
  const deadline = new Date(2026, 8, 5);

  // TODO
};

soal4();
🎯 Tugas

Hitung berapa hari lagi sampai deadline.

Output yang diharapkan:

Today       : 26/08/2026
Deadline    : 05/09/2026
Days Left   : 10 days

Requirements
Jangan menghitung tanggal secara manual.
Gunakan getTime() atau unary + untuk mendapatkan timestamp.

Hitung selisih:
deadline - today
Ingat bahwa hasil pengurangan dua Date adalah milliseconds.
Konversikan milliseconds → days.
Gunakan Math.round() untuk mendapatkan jumlah hari bulat.
Format tanggal menjadi DD/MM/YYYY seperti Challenge 3.
💡 Hint 1 — Timestamp

Kamu bisa mendapatkan timestamp dengan:

today.getTime()

dan:

deadline.getTime()

Kemudian:

const difference = deadline.getTime() - today.getTime();
*/

const soal4 = function () {
  const today = new Date(2026, 7, 26);
  const deadline = new Date(2026, 8, 5);

  const difference = deadline.getTime() - today.getTime();

  const dayLeft = Math.round(difference / (1000 * 60 * 60 * 24));
  console.log(
    `Today \t\t\t : ${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}\n` +
      `Deadline \t\t : ${String(deadline.getDate()).padStart(2, '0')}/${String(deadline.getMonth() + 1).padStart(2, '0')}/${deadline.getFullYear()}\n` +
      `Days Left \t\t : ${dayLeft}`,
  );
};

soal4();

/*
🧪 Challenge 5 — Subscription Expiration

Kamu sedang membuat sistem subscription.

Seorang user mulai berlangganan pada:

const subscriptionStart = new Date(2026, 7, 26);

Subscription berlaku selama 30 hari.

🎯 Tugas

Buat function soal5 yang menghasilkan:

Subscription Start : 26/08/2026
Expiration Date    : 25/09/2026
Requirements
Buat subscriptionStart dengan:
new Date(2026, 7, 26)
Buat Date baru untuk expiration.

⚠️ Jangan mengubah subscriptionStart secara langsung.

Gunakan:
setDate()

untuk menambahkan 30 hari.

Format tanggal menjadi:
DD/MM/YYYY
Gunakan padStart() seperti Challenge 3 & 4.
💡 Hint

Kamu bisa membuat copy dari Date:

const expirationDate = new Date(subscriptionStart);

Kemudian:

expirationDate.setDate(
  expirationDate.getDate() + 30
);

Kenapa kita melakukan:

expirationDate.getDate() + 30

bukan:

expirationDate.setDate(30);

Karena kita ingin menambahkan 30 hari, bukan menetapkan tanggal menjadi tanggal 30.

⚠️ Konsep penting

Perhatikan ini:

const date = new Date(2026, 7, 26);

date.setDate(date.getDate() + 30);

JavaScript akan otomatis menangani ketika tanggal melewati akhir bulan.

Kamu tidak perlu menghitung:

26 Agustus
+ 5 hari → 31 Agustus
+ 25 hari → 25 September

JavaScript yang mengurusnya.

⭐ Bonus

Setelah berhasil, coba ubah:

const subscriptionStart = new Date(2026, 7, 26);

menjadi:

const subscriptionStart = new Date(2026, 11, 15);

dan lihat apakah JavaScript bisa menangani perpindahan tahun ketika menambahkan 30 hari.
*/

const soal5 = function () {
  const subscriptionStart = new Date(2026, 11, 15);
  const expirationDate = new Date(subscriptionStart);

  expirationDate.setDate(expirationDate.getDate() + 30);

  console.log(
    `${String(subscriptionStart.getDate()).padStart(2, '0')}/${String(subscriptionStart.getMonth() + 1).padStart(2, '0')}/${subscriptionStart.getFullYear()}`,
  );

  console.log(
    `${String(expirationDate.getDate()).padStart(2, '0')}/${String(expirationDate.getMonth() + 1).padStart(2, '0')}/${expirationDate.getFullYear()}`,
  );
};

soal5();
