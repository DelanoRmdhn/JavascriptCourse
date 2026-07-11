"use strict";

//MINI TASK MINGGU 2 DAY 9 : 10 SOAL NESTED FOR LOOP

/* 
Soal 1

Output

*
**
***
****
*****

*/

for (let i = 1; i <= 5; i++) {
  let bintang = "";
  for (let j = 0; j < i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}

/*
Soal 2

Output

*****
****
***
**
*

*/

for (let i = 5; i >= 1; i--) {
  let bintang = "";
  for (let j = 0; j < i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}

/*
Soal 3

Output

11111
22222
33333
44444
55555
*/

for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 1; j <= 5; j++) {
    angka += i;
  }
  console.log(angka);
}

/*
Soal 4

Output

12345
12345
12345
12345
12345
*/

for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 1; j <= 5; j++) {
    angka += j;
  }
  console.log(angka);
}

/*Soal 5

Output

1
12
123
1234
12345 */

for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 1; j <= i; j++) {
    angka += j;
  }
  console.log(angka);
}

/*Soal 6

Output

12345
1234
123
12
1 
*/

for (let i = 5; i >= 1; i--) {
  let angka = "";
  for (let j = 1; j <= i; j++) {
    angka += j;
  }
  console.log(angka);
}

/*
Soal 7

Output

A 65
AB 66
ABC 67
ABCD 68
ABCDE 69

Hint:
Gunakan

String.fromCharCode()
*/

for (let i = 65; i <= 69; i++) {
  let huruf = "";
  for (let j = 65; j <= i; j++) {
    huruf += String.fromCharCode(j);
  }
  console.log(huruf);
}

/*
Soal 8

Output

1
22
333
4444
55555
*/

for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 1; j <= i; j++) {
    angka += i;
  }
  console.log(angka);
}

/*
Soal 9

Output

54321
5432
543
54
5
*/

for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 5; j >= i; j--) {
    angka += j;
  }
  console.log(angka);
}

/*
Soal 10 (Lumayan Menantang)

Output

1
23
456
78910
1112131415

Hint:
Gunakan satu variabel yang terus bertambah.
*/

let counter = 1;
for (let i = 1; i <= 5; i++) {
  let angka = "";
  for (let j = 0; j < i; j++) {
    angka += counter;
    counter++;
  }
  console.log(angka);
}
