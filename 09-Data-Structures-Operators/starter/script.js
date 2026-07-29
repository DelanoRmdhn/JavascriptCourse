'use strict';

/* 
SOAL PRAKTIKUM MANDIRI
Topik: Nullish Coalescing Operator (??) vs Logical OR (||)

Studi Kasus: Sistem Estimasi Durasi Pengerjaan Proyek UMKM

Skenario
Agensi PT. CAHAYA REMBULAN SEJATI sedang mengevaluasi data estimasi hari pengerjaan untuk 3 proyek UMKM arsitektur yang baru masuk:

Proyek A (proyekBiasa): Estimasi durasi bernilai undefined (belum diisi oleh klien).

Proyek B (proyekExpress): Estimasi durasi bernilai 0 (klien memesan layanan instalasi express langsung jadi di hari yang sama).

Proyek C (proyekRevisi): Estimasi durasi bernilai null (data rusak/kosong dari database).

Anda diminta membuat sistem penentu estimasi durasi dengan Default Value = 14 Hari jika data bernilai nullish.

Instruksi Tugas
Inisialisasi Variable:

Deklarasikan 3 variabel berikut beserta nilainya:

const durasiProyekA = undefined;

const durasiProyekB = 0;

const durasiProyekC = null;

Evaluasi Durasi Menggunakan Operator ??:

Buat 3 variabel baru (hasilProyekA, hasilProyekB, hasilProyekC).

Gunakan operator ?? untuk mengevaluasi masing-masing durasi di atas dengan nilai default 14 (hari).

Komparasi Menggunakan Operator || (Uji Pemahaman):

Buat 1 variabel pembanding bernama ujiProyekB_OR yang mengevaluasi durasiProyekB menggunakan operator || dengan nilai default 14.

Output Console:

Cetak hasil evaluasi ketiga proyek ke console.

Cetak juga hasil komparasi ujiProyekB_OR untuk memperlihatkan perbedaan nyata antara ?? dan || saat menangani angka 0.

Target Tampilan Output Console:
Plaintext
=== ESTIMASI DURASI PENGERJAAN PROYEK ===
Proyek A (Undefined) : 14 Hari
Proyek B (Express 0) : 0 Hari
Proyek C (Null)      : 14 Hari

--- BUKTI PERBEDAAN OPERATOR ON PROYEK B ---
Menggunakan '??' (Akurat): 0 Hari
Menggunakan '||' (Bug   ): 14 Hari
*/

const durasiProyekA = undefined;
const durasiProyekB = 0;
const durasiProyekC = null;

const hasilProyekA = durasiProyekA ?? `14 Hari`;
const hasilProyekB = durasiProyekB ?? `14 Hari`;
const hasilProyekC = durasiProyekC ?? `14 Hari`;

const ujiProyekB_OR = durasiProyekB || `14 Hari`;

console.log(
  `
  === ESTIMASI DURASI PENGERJAAN PROYEK ===
  Proyek A (Undefined) : ${hasilProyekA}
  Proyek B (0) : ${hasilProyekB}
  Proyek C (null) : ${hasilProyekC}
  
  --- BUKTI PERBEDAAN OPERATOR ON PROYEK B ---
  Menggunakan '??' (Akurat): ${hasilProyekB}
  Menggunakan '||' (Bug   ): ${ujiProyekB_OR}
  `,
);
