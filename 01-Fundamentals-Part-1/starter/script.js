// DAY 3

/*
TEMPLATE LITERALS : Sebuah Cara penulisan string yang jauh lebih readable dan saat ini digunakan di Modern Javascript
*/

const nama = "Delano Bariq Ramadhan";
let tahun = 2026;
let tahunLahir = 2006;
let pekerjaan = "Mahasiswa Semeseter 5";
const jurusan = "S1 Rekayasa Perangkat Lunak";
const univesitas = "Telkom University";

const kalimat = `Haii Semuanyaa, Nama saya ${nama} dan saya lahir pada tahun ${tahunLahir}. Jadi umur saya saat ini adalah ${tahun - tahunLahir} tahun!. Saya merupakan seorang ${pekerjaan} di ${univesitas}`;

console.log(kalimat);
