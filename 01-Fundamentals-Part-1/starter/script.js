//DAY 5

/*
EQUALITY OPERATORS : == VS ===

Adalah sebuah operator untuk memvalidasi / membandingkan suatu nilai yang mengembalikan sebuah nilai berupa true atau false.

== : loose equality operator. Type coercion diterapkan. 

=== : ini adalah strict equality operator. yang berarti type coercion tidak diterapkan. Dimana dia hanya akan mengembalikan nilai true apabila kedua nilai sama persis. (gunakan ini untuk menghindari Bug)  
*/

const umur1 = 20;
const umur2 = 20;
//===
if (umur1 === 20) console.log(`Kamu sudah dewasa! umur anda ${umur1} tahun.`);
//==
if (umur2 == "20") console.log(`Kamus sudah dewasa! umur anda ${umur2} tahun.`);

let input = prompt(`Masukan Angka : `);

//latihan penasaran
if (!Number.isNaN(Number(input))) {
  input = Number(input);
  console.log(
    `Angka Favorit Kamu adalah : ${input} tipe datanya : ${typeof input}`,
  );
} else {
  console.log(`Yang kamu Input Bukan angka!`);
}
