// DAY 4

/*
TYPE CONVERSION & TYPE COERCION

type Conversion : Mengubah tipe data sebuah nilai secara Manual / kita ubah sendiri
type coercion : Mengubah tipe data sebuah nilai secara otomatis

*/

let input = prompt("Masukan tahun kelahiran anda :");
console.log(typeof input); // dia bertipe data String.

//cara conversion
let tahunKelahiran = Number(input);
console.log(typeof tahunKelahiran); //sekarang dia tipe data nya sudah Number

console.log(`Maka Umur Kamu sekarang adalah ${2026 - tahunKelahiran} tahun.`);

//kalo case coercion
console.log(`Maka Umur Kamu sekarang adalah ${2026 - input} tahun.`); // ini bisa terjadi karena javascript secara otomatis mengubah tipe data nya si variable input karena ada operasi aritmatika (-,*,/) di dalamnya. namun apabila menggunakan + maka dia tetap ke detect sebagai String.
