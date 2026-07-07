"use strict";

//MINI TASK MINGGU 2 DAY 7 : ARRAY

/*SOAL 2 
Topik: Array Basics & Array Methods

Studi Kasus: Dynamic Skillset Portfolio Management

Skenario
Anda sedang membangun sistem manajemen data untuk halaman portfolio pribadi. Daftar keahlian (skillset) yang ditampilkan harus dapat diperbarui secara dinamis berdasarkan modul teknologi yang berhasil diselesaikan, fokus kompetensi utama yang ingin ditonjolkan, maupun teknologi yang diputuskan untuk dipangkas dari daftar prioritas.

Instruksi Tugas
Inisialisasi Data:

Buat sebuah array bernama skillsetFrontend yang berisi data awal: "HTML", "CSS", dan "Figma".

Manipulasi Data (Wajib Menggunakan Array Methods):

Tambahkan teknologi "Tailwind CSS" ke urutan paling terakhir di dalam array.

Tambahkan teknologi "Framer" ke urutan paling pertama di dalam array.

Hapus teknologi "CSS" dari dalam array berdasarkan posisi indeksnya secara dinamis.

Periksa apakah teknologi "Next.js" sudah tersedia di dalam array hasil manipulasi tersebut. Simpan hasil pengecekan ke dalam variabel isNextJsMastered.

Output:

Cetak hasil akhir array ke console.

Cetak jumlah total panjang array ke console.

Cetak status penguasaan "Next.js" menggunakan evaluasi kondisi dari variabel isNextJsMastered.

Target Tampilan Output Console:
Plaintext
=== PORTFOLIO SKILLSET MANAGEMENT ===
Daftar Skill Akhir : [ 'Framer', 'HTML', 'Figma', 'Tailwind CSS' ]
Jumlah Total Skill : 4 Item
Status Skill Next.js: Belum Menguasai Next.js, Perlu Belajar Lagi!

*/
const skillsetFrontend = ["HTML", "CSS", "Figma"];
console.log(`Skill Awal Saya : ${skillsetFrontend}`);

skillsetFrontend.push("Tailwind CSS");
skillsetFrontend.unshift("Framer");

if (skillsetFrontend.includes("CSS")) {
  skillsetFrontend.splice(skillsetFrontend.indexOf("CSS"), 1);
}

const totalSkill = skillsetFrontend.length;

console.log(`=== PORTFOLIO SKILLSET MANAGEMENT ===\n
Daftar Skill Akhir : ${skillsetFrontend}\n
Jumlah Total Skill : ${totalSkill}\n
Status Skill Next.js:${skillsetFrontend.includes("Next.js") ? "Sudah ada Skill Next.JS" : "Belum Menguasai Next.js, Perlu Belajar Lagi!"}`);
