//MINI TASK HARIAN DAY 5

/*
SOAL 2 

Skenario
Agensi Anda memiliki jadwal operasional mingguan yang bervariasi untuk melayani klien UMKM dan Arsitek. Selain itu, agensi memiliki sistem kuota proyek harian yang statusnya bisa penuh atau tersedia.

Anda diminta membuat sistem skrip yang membaca dua data input: nama hari saat ini dan jumlah proyek yang sedang berjalan (active projects). Sistem tersebut harus mengeluarkan informasi mengenai jam operasional hari tersebut serta status ketersediaan slot agensi menggunakan struktur kode JavaScript modern.

Instruksi Tugas

Deklarasikan dua variabel awal untuk pengujian (Anda bebas mengubah nilainya saat melakukan uji coba):

let inputHari = "Sabtu"; (Gunakan format teks dengan huruf kapital di awal).

let jumlahProyekAktif = 4; (Berupa angka murni).

Tugas Pertama (Menggunakan switch):

Tentukan pesan jam operasional berdasarkan inputHari dengan ketentuan:

Jika hari Senin hingga Jumat, agensi beroperasi penuh dari jam "09.00 - 17.00 WIB".

Jika hari Sabtu, agensi beroperasi setengah hari dari jam "09.00 - 13.00 WIB".

Jika hari Minggu, agensi "Libur Operasional".

Jika input di luar nama hari yang valid, berikan pesan kesalahan standar.

Wajib menggunakan struktur switch statement murni.

Tugas Kedua (Menggunakan Ternary Operator):

Tentukan status kuota booking agensi berdasarkan variabel jumlahProyekAktif.

Jika jumlah proyek aktif bernilai lebih besar atau sama dengan 5, maka simpan teks "Kuota Penuh" ke dalam sebuah variabel.

Jika di bawah itu, maka simpan teks "Slot Tersedia" ke dalam variabel tersebut.

Wajib ditulis menggunakan sintaks Ternary Operator dalam 1 baris kode, tanpa ada kata kunci if atau else.

Tampilkan hasil akhir pengujian tersebut ke dalam console browser menggunakan Template Literals dengan format terstruktur.

Target Output di Console Browser:

Plaintext
=== STATUS OPERASIONAL AGENSI ===
Hari diinput: Sabtu
Jadwal Operasional: 09.00 - 13.00 WIB
Status Slot Proyek: Slot Tersedia
*/

let inputHari = prompt("Masukan Hari : ");
let hari = inputHari[0].toUpperCase() + inputHari.slice(1);
let jumlahProyekAktif = 5;
// console.log(hari);

const cekProyekAktif =
  jumlahProyekAktif >= 5 ? "Kouta Penuh 🙏" : "Kouta Tersedia";

console.log(`=== STATUS OPERASIONAL AGENSI ===`);
switch (hari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log(
      `Hari diinput : ${hari}\nJadwal Operasional : 09.00 - 17.00 WIB\nStatus Slot Proyek : ${cekProyekAktif}`,
    );
    break;

  case "Sabtu":
    console.log(
      `Hari diinput : ${hari}\nJadwal Operasional : 09.00 - 13.00 WIB\nStatus Slot Proyek : ${cekProyekAktif}`,
    );
    break;

  case "Minggu":
    console.log(
      `Hari diinput : ${hari}\nJadwal Operasional : Tidak Beroperasional 🙏`,
    );
    break;

  default:
    console.log(`Tidak ada hari dengan nama ${hari}`);
}
