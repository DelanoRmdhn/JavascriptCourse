'use strict';

//CHALLANGE 1 : FOR OF LOOP
/*
Challenge (Level Jonas Schmedtmann)

Diberikan data berikut.

const game = {
  players: [
    ["Neuer", "Pavard", "Davies"],
    ["Burki", "Hummels", "Brandt"],
  ],
};

Tanpa menggunakan for biasa, tampilkan

Team 1
Neuer
Pavard
Davies

Team 2
Burki
Hummels
Brandt
*/

const game = {
  players: [
    ['Neuer', 'Pavard', 'Davies'],
    ['Burki', 'Hummels', 'Brandt'],
  ],
};

for (const [i, player] of game.players.entries()) {
  console.log(`Team${i + 1}`);
  for (const playerName of player) {
    console.log(playerName);
  }
  console.log('\n');
}

/*
Misalkan state cart-mu seperti ini:

const cart = [
  {
    id: 1,
    name: "Indomie",
    price: 3500,
    quantity: 2,
  },
  {
    id: 2,
    name: "Aqua",
    price: 4000,
    quantity: 1,
  },
  {
    id: 3,
    name: "Teh Botol",
    price: 5000,
    quantity: 4,
  },
];

Gunakan hanya for...of (ditambah destructuring jika perlu) untuk menghitung:

Total quantity seluruh barang.
Subtotal belanja.
Pajak 10%.
Grand total.
Cetak receipt seperti berikut:
===== RECEIPT =====

Indomie
2 x Rp3500 = Rp7000

Aqua
1 x Rp4000 = Rp4000

Teh Botol
4 x Rp5000 = Rp20000

--------------------
Subtotal : Rp31000
Tax      : Rp3100
Total    : Rp34100
*/
const cart = [
  {
    id: 1,
    name: 'Indomie',
    price: 3500,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Aqua',
    price: 4000,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Teh Botol',
    price: 5000,
    quantity: 4,
  },
];

const generateReceipt = function () {
  console.log('===== RECEIPT =====');

  let subtotal = 0;

  for (const { name, price, quantity } of cart) {
    const itemTotal = price * quantity;

    console.log(`
${name}
${quantity} x Rp${price} = Rp${itemTotal}
`);

    subtotal += itemTotal;
  }

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  console.log(`
Subtotal : Rp${subtotal}
Tax      : Rp${tax}
Total    : Rp${total}
`);
};
generateReceipt();
