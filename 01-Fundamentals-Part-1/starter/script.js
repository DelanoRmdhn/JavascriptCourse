//DAY 2

/* 

DATA TYPES : Terdapat 2 Jenis Data Types yakni Object & Primitive. untuk saat ini kita akan berfokus di tipe data jenis primitive.

1. Number : Tipe data berjenis angka, contoh : 23
2. String : Tipe data berjenis String, contoh : "Delano Bariq Ramadhan 19"
3. Boolean : Tipe data dengan jenis kondisi, contoh : true / false
4. Undefined : kondisi dimana sebuah variable belum memiliki nilai, contoh : let namaSaya;
5. Null : kosong
6. Symbol : tipe data yang dimana nilainya bersifat unik dan tidak dapat diubah
7. BigInt : digunakan ketika tipe data number sudah tidak bisa menampung ukuran angka yang disimpan

typeof : untuk melihat jenis tipe data yang digunakan
*/

let nama = "Delano Bariq Ramadhan";
console.log(nama);
console.log("Jenis tipe data variable nama : " + typeof nama);

let umur;
console.log(umur);
console.log(
  "Case apabila Variabel umur belum di set value nya maka : " + typeof umur,
);

umur = 2026 - 2006;
console.log(umur);
console.log("Variable Umur telah di set dan nilainya : " + umur);

/*
PENDEKLARASIAN VARIABLE

1. let : digunakan ketika kita ingin reassign / merubah sebuah nilai dari suatu variabel  
2. const : digunakan ketika nilai yang kita assign pada suatu variable tidak akan dirubah (FIXED VALUE)
*/

const namaPanjang = "Delano Bariq Ramadhan";
let age = 19;

/*
BASIC OPERATORS

1. Operator Aritmatika            |2. Operator Logika         |3. Operator Perbandingan 
- Tambah : +                      |- AND : &&                 |- kurang dari : <
- Kurang : -                      |- OR : ||                  |- lebih dari : >
- Kali : *                        |- NOT : !                  |- kurang dari sama dengan : <=
- Bagi : /                        |                           |- lebih dari sama dengan : >=
- Pangkat : **                    |                           |
- sisa bagi : %                   |                           |
- increment : ++                  |                           |
- decrement : --                  |                           |

 */

const year = 2026;
const tahunLahir = 2006;
const umurSaya = year - tahunLahir;

const umurFairuz = 24;
console.log(umurFairuz > umurSaya);
