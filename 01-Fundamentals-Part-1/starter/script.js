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
