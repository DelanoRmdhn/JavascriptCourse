'use strict';

//////////////////////////////
//WORKING WITH STRING
//////////////////////////////

const airline = 'Garuda Indonesia GR';
const airlineType = 'Boeing-747';

//1. indexOf
console.log(airline.indexOf('G'));

//2. lastIndexOf
console.log(airline.lastIndexOf('G'));

//3. slice(indexAwal)
console.log(airlineType.slice(7));

//4. slice(indexAwal,indexAkhir)
console.log(airlineType.slice(0, 6));

//Kombinasi
console.log(airline.slice(airline.indexOf('G'), airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));

//Function cek kursi tengah (b,e,f,i)
const checkMiddleSeat = function (seat) {
  const getAlphabet = seat.slice(-1);

  if (
    getAlphabet === 'B' ||
    getAlphabet === 'E' ||
    getAlphabet === 'F' ||
    getAlphabet === 'I'
  ) {
    console.log(`Your Seat :${seat}`);
    console.log(`You ARE Getting Middle Seat!`);
  } else {
    console.log(`Your Seat :${seat}`);
    console.log('You are NOT getting Middle Seat!');
  }
};

// checkMiddleSeat('11A');
// checkMiddleSeat('11B');
// checkMiddleSeat('11C');
// checkMiddleSeat('11D');
// checkMiddleSeat('11E');
// checkMiddleSeat('11F');
// checkMiddleSeat('11G');
// checkMiddleSeat('11H');
// checkMiddleSeat('11I');
// checkMiddleSeat('11J');
