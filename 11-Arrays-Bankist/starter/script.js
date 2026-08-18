'use strict';

//LATIHAN SOAL SORT

/*
1. Transaction Analyzer — ⭐⭐

Diberikan:

const movements = [
  200, -450, 700, -1200, 3000,
  -150, 850, -75, 4200, -600
];

Task:

Buat sebuah array baru yang:

Hanya berisi transaksi positif.
Diurutkan dari terbesar → terkecil.
Array movements asli tidak boleh berubah.

Expected:

[
  4200,
  3000,
  850,
  700,
  200
]

Bonus: coba buat tanpa sort() langsung pada movements.
*/

const soal1 = function () {
  const movements = [200, -450, 700, -1200, 3000, -150, 850, -75, 4200, -600];
  return movements.filter(mov => mov > 0).sort((a, b) => b - a);
};
console.log(soal1());

/*
2. Top 3 Transactions — ⭐⭐⭐

Gunakan:

const movements = [
  1200, -300, 5000, -1500,
  700, 3200, -450, 9000,
  250, -800
];

Buat array yang berisi 3 transaksi positif terbesar.

Expected:

[
  9000,
  5000,
  3200
]

Constraint:

Jangan menggunakan Math.max().
Gunakan array methods.
Jangan mengubah movements asli.

💡 Ini mulai menguji apakah kamu tahu urutan chaining method yang tepat.
*/

const soal2 = function () {
  const movements = [1200, -300, 5000, -1500, 700, 3200, -450, 9000, 250, -800];

  const transaction = movements.filter(mov => mov > 0).sort((a, b) => b - a);
  const topThreeTransaction = transaction.slice(0, 3);
  console.log(topThreeTransaction);
};

soal2();

/*
3. Median Transaction — ⭐⭐⭐⭐

Diberikan:

const movements = [
  500, -200, 300, 700,
  -100, 900, -400, 600
];

Cari median dari seluruh transaksi positif.

Langkah yang perlu kamu pikirkan:

ambil positif
↓
sort ascending
↓
cari nilai tengah

Untuk data:

[500, 300, 700, 900, 600]

setelah sorting:

[300, 500, 600, 700, 900]

Median:

600


*/

const soal3 = function () {
  const movements = [500, -200, 300, -100, 900, -400, 600];
  const median = movements.filter(mov => mov > 0).sort((a, b) => a - b);

  if (median.length % 2 == 0) {
    const avg = (median[median.length / 2 - 1] + median[median.length / 2]) / 2;
    return avg;
  } else {
    return median[Math.floor(median.length / 2)];
  }
};

console.log(soal3());

/*
🔵 LEVEL 2 — Sorting String
4. Bank Customer Directory — ⭐⭐

Diberikan:

const customers = [
  'Jessica Davis',
  'jonas Schmedtmann',
  'Adam Smith',
  'Sarah Smith',
  'Steven Thomas'
];

Urutkan nama dari:

A → Z

Tetapi ada masalah:

Beberapa nama menggunakan lowercase.

Hasil harus tetap dianggap sebagai sorting case-insensitive.

Expected:

[
  'Adam Smith',
  'Jessica Davis',
  'jonas Schmedtmann',
  'Sarah Smith',
  'Steven Thomas'
]

💡 Gunakan localeCompare().
*/

const soal4 = function () {
  const customers = [
    'Jessica Davis',
    'jonas Schmedtmann',
    'Adam Smith',
    'Sarah Smith',
    'Steven Thomas',
  ];

  console.log(customers.sort((a, b) => a.localeCompare(b)));
};

soal4();

/*
5. Sort by Name Length — ⭐⭐⭐

Diberikan:

const names = [
  'Jonas',
  'Alex',
  'Christopher',
  'Sarah',
  'Bo',
  'Jessica'
];

Urutkan berdasarkan panjang nama, dari paling pendek → paling panjang.

Expected:

[
  'Bo',
  'Alex',
  'Sarah',
  'Jonas',
  'Jessica',
  'Christopher'
]

Bonus requirement:

Jika dua nama memiliki panjang yang sama, urutkan keduanya secara alfabetis.

Contoh:

[
  'Sarah',
  'Jonas',
  'Adam'
]

Karena semuanya panjangnya 5, hasil:

[
  'Adam',
  'Jonas',
  'Sarah'
]

🔥 Ini mulai menarik karena compare function-mu punya dua aturan.
*/

const soal5 = function () {
  const names = ['Jonas', 'Alex', 'Christopher', 'Sarah', 'Bo', 'Jessica'];

  const sortName = names.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
      return a.localeCompare(b);
    }
  });
  console.log(sortName);
};

soal5();

/*
6. Sort Words by Character Frequency — ⭐⭐⭐⭐

Diberikan:

const words = [
  'apple',
  'banana',
  'kiwi',
  'watermelon',
  'pear'
];

Urutkan berdasarkan jumlah karakter, terbesar → terkecil.

Expected:

[
  'watermelon',
  'banana',
  'apple',
  'kiwi',
  'pear'
]

Tapi ada aturan tambahan:

Jika dua kata memiliki panjang yang sama, urutkan secara alfabetis A → Z.

Jadi kamu harus membuat compare function yang kira-kira memiliki logika:

Apakah panjangnya berbeda?
    ↓
YA → bandingkan panjang
    ↓
TIDAK
    ↓
bandingkan alfabetis
*/

const soal6 = function () {
  const words = ['apple', 'banana', 'kiwi', 'watermelon', 'pear'];

  const sortWord = words.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    } else {
      return a.localeCompare(b);
    }
  });

  console.log(sortWord);
};

soal6();

/*
🟠 LEVEL 3 — Array of Objects

Nah, ini yang paling Jonas banget.

7. Bank Account Ranking — ⭐⭐⭐

Gunakan data:

const accounts = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650]
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790]
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300]
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50]
  }
];

Buat array baru yang berisi account yang diurutkan berdasarkan balance terbesar → terkecil.

Balance:

Jonas   → 2600
Jessica → 7460
Steven  → 40
Sarah   → 2180

Expected urutan:

Jessica
Jonas
Sarah
Steven

Constraint:

Jangan menambahkan property balance ke object original.

Jadi kamu harus mencari cara melakukan sorting berdasarkan hasil:

movements.reduce(...)

🔥 Ini bagus untuk menguji pemahamanmu tentang:

object → property → array method → reduce → sort
*/

const soal7 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650],
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790],
    },
    {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300],
    },
    {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50],
    },
  ];

  const sortBalance = accounts
    .map(acc => {
      return {
        owner: acc.owner,
        movements: acc.movements.reduce((add, mov) => add + mov, 0),
      };
    })
    .sort((a, b) => b.movements - a.movements);

  console.log(sortBalance);
};

soal7();

/*
8. Transaction Leaderboard — ⭐⭐⭐⭐

Diberikan:

const accounts = [
  {
    owner: 'Jonas',
    movements: [200, 450, -400, 3000, -650]
  },
  {
    owner: 'Jessica',
    movements: [5000, 3400, -150, -790]
  },
  {
    owner: 'Steven',
    movements: [200, -200, 340, -300]
  },
  {
    owner: 'Sarah',
    movements: [430, 1000, 700, 50]
  }
];

Buat leaderboard berdasarkan:

Total uang yang pernah masuk ke rekening, bukan balance.

Artinya hanya movements > 0 yang dihitung.

Contoh:

Jonas
200 + 450 + 3000 = 3650

Jessica:

5000 + 3400 = 8400

dan seterusnya.

Expected konsep:

[
  { owner: 'Jessica', totalDeposits: 8400 },
  { owner: 'Jonas', totalDeposits: 3650 },
  ...
]

Challenge:

Hasil akhir harus berupa array of objects baru, bukan mengubah accounts.

Kamu kemungkinan akan membutuhkan:

map
↓
filter
↓
reduce
↓
sort
*/

const soal8 = function () {
  const accounts = [
    {
      owner: 'Jonas',
      movements: [200, 450, -400, 3000, -650],
    },
    {
      owner: 'Jessica',
      movements: [5000, 3400, -150, -790],
    },
    {
      owner: 'Steven',
      movements: [200, -200, 340, -300],
    },
    {
      owner: 'Sarah',
      movements: [430, 1000, 700, 50],
    },
  ];

  const balanceLeaderboard = accounts
    .map(acc => {
      return {
        owner: acc.owner,
        movements: acc.movements
          .filter(mov => mov > 0)
          .reduce((add, mov) => add + mov, 0),
      };
    })
    .sort((a, b) => b.movements - a.movements);

  console.log(accounts);
  console.log(balanceLeaderboard);
};

soal8();

/*
🔴 9. The Bankist Ranking System — ⭐⭐⭐⭐⭐

Ini yang paling aku rekomendasikan buat kamu.

Gunakan kembali data:

const accounts = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1
  }
];

Buat sebuah ranking nasabah berdasarkan:

Ranking criteria

Prioritas #1

Balance terbesar → terkecil.

Jika balance sama, gunakan:

Prioritas #2

Jumlah transaksi positif terbanyak → tersedikit.

Jika masih sama, gunakan:

Prioritas #3

Nama owner A → Z.

Output:

[
  {
    owner: '...',
    balance: ...,
    deposits: ...
  },
  ...
]

Jadi compare function-mu harus mampu berpikir seperti:

Bandingkan balance
        ↓
sama?
 ↓
bandingkan jumlah deposits
        ↓
sama?
 ↓
bandingkan nama

🔥 Ini sudah benar-benar masuk ke level memahami sort(), bukan sekadar menghafal a - b.
*/

const soal9 = function () {
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2,
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
    },
    {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
    },
    {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
    },
  ];

  const ranking = accounts
    .map(({ owner, movements }) => {
      return {
        owner,
        balance: movements.reduce((acc, mov) => acc + mov, 0),
        deposits: movements.filter(mov => mov > 0).length,
      };
    })
    .sort((a, b) => {
      if (a.balance !== b.balance) {
        return b.balance - a.balance;
      }

      if (a.deposits !== b.deposits) {
        return b.deposits - a.deposits;
      }

      return a.owner.localeCompare(b.owner);
    });

  console.log(ranking);
};

soal9();
