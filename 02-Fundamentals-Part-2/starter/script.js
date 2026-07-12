"use strict";

//WEEKLY PROJECT 2 : Freelancer Client & CRM Tracker (Console-Based)

/* 
SPECIFICATION: WEEKLY MINI PROJECT 2
Nama Project: Freelancer Client & CRM Tracker (Console-Based)

Tujuan: Mengelola data klien agensi, menghitung performa finansial, dan melacak status progres proyek secara otomatis.

Fitur & Instruksi Tugas
Inisialisasi Database Klien (Array of Objects):

Buat sebuah array bernama databaseCRM.

Isi array tersebut dengan 3 data objek klien awal yang merepresentasikan proyek UMKM arsitektur/konstruksi dengan struktur properti sebagai berikut:

namaKlien (String)

jenisWebsite (String: "Landing Page" atau "Company Profile")

hargaKontrak (Number: range 3.000.000 - 8.000.000)

statusProgres (String: "Figma Design", "Development", atau "Done")

Sistem Manipulasi Data (Fungsi Tambah Klien):

Buat sebuah fungsi bernama tambahKlienBaru (disarankan menggunakan Arrow Function).

Fungsi ini menerima parameter data klien baru, melakukan pengecekan data dasar (safeguard), lalu memasukkannya ke dalam array databaseCRM menggunakan array method yang tepat.

Sistem Kalkulator Keuangan & CRM (Fungsi Utama Tracker):

Buat sebuah fungsi utama bernama jalankanCRMTracker.

Di dalam fungsi ini, wajib terdapat Fungsi Bersarang (Nested Function) bernama hitungBiayaOperasional yang berfungsi menghitung biaya potongan internal agensi sebesar 15% dari total harga kontrak sebuah proyek (menggunakan konsep Lexical Scope).

Di dalam fungsi utama, lakukan perulangan (for loop) untuk menjelajahi seluruh data di dalam databaseCRM.

Logika Penyaringan (Filter): Jika status progres proyek klien berkategori "Figma Design", gunakan kata kunci continue untuk melompatinya (asumsi: proyek desain belum masuk ke kalkulasi keuangan produksi visual).

Untuk proyek yang lolos saringan ("Development" atau "Done"):

Hitung keuntungan bersih proyek dengan rumus: hargaKontrak - hitungBiayaOperasional().

Cetak detail performa proyek tersebut ke console.

Pelaporan Akhir (Output):

Cetak seluruh log manajemen dengan rapi menggunakan Template Literals, sehingga tim keuangan dan tim developer agensimu bisa langsung membaca laporan ringkasnya di console browser.

Target Tampilan Output Console:
(Contoh variasi jika ada data yang terfilter/lolos perulangan)

Plaintext
=== CRM & FINANCIAL TRACKER: PT. CAHAYA REMBULAN SEJATI ===

[PROGRES DEVELOPMENT / DONE]
Klien           : Studio Arsitek Garis Lurus
Tipe Layanan    : Company Profile
Keuntungan Bersih: Rp 4250000

[PROGRES DEVELOPMENT / DONE]
Klien           : Kontraktor Baja Mandiri
Tipe Layanan    : Landing Page
Keuntungan Bersih: Rp 2550000

============================================================
Total Klien Terdaftar Aktif: 4 Klien
*/

const databaseCRM = [
  {
    namaKlien: "Studio Artefak Garis Lurus",
    jenisWebsite: "Company Profile",
    hargaKontrak: 5000000,
    statusProgress: "Done",
  },
  {
    namaKlien: "Kontraktor Baja Mandiri",
    jenisWebsite: "Landing Page",
    hargaKontrak: 3000000,
    statusProgress: "Done",
  },
  {
    namaKlien: "PT. Cahaya Rembulan Sejati",
    jenisWebsite: "Company Profile",
    hargaKontrak: 8000000,
    statusProgress: "Development",
  },
];

const tambahKlienBaru = (
  namaKlien,
  jenisWebsite,
  hargaKontrak,
  statusProgress,
) => {
  //Validasi namaKlien
  if (typeof namaKlien !== "string" || isNaN(namaKlien)) {
    return;
  }

  //validasi jenis website
  if (jenisWebsite !== "Landing Page" && jenisWebsite !== "Company Profile") {
    return;
  }

  //validasi hargaKontrak
  if (
    isNaN(hargaKontrak) ||
    hargaKontrak <= 3000000 ||
    hargaKontrak >= 8000000
  ) {
    return;
  }

  //Validasi statusProgress
  if (
    statusProgress !== "Figma Design" ||
    statusProgress !== "Development" ||
    statusProgress !== "Done"
  ) {
    return;
  }

  databaseCRM.push({
    namaKlien: namaKlien,
    jenisWebsite: jenisWebsite,
    hargaKontrak: hargaKontrak,
    statusProgress: statusProgress,
  });
};

tambahKlienBaru("CV. BERKAH ABADI", "Company Profile", 5000000, "Figma Design");

console.log(databaseCRM);

const jalankanCRMTracker = function () {
  console.log(`=== CRM & FINANCIAL TRACKER: PT. CAHAYA REMBULAN SEJATI ===`);
  for (let i = 0; i < databaseCRM.length; i++) {
    if (databaseCRM[i].statusProgress === "Figma Design") continue;
    function hitungBiayaOperasional() {
      return databaseCRM[i].hargaKontrak * 0.15;
    }

    const keuntunganBersih =
      databaseCRM[i].hargaKontrak - hitungBiayaOperasional();

    console.log(`[PROGRES DEVELOPMENT / DONE]`);
    console.log(`Klien : ${databaseCRM[i].namaKlien}`);
    console.log(`Tipe Layanan : ${databaseCRM[i].jenisWebsite}`);
    console.log(`Keuntungan Bersih : ${keuntunganBersih}\n`);
  }
  console.log(`============================================================`);
  console.log(`Total Klien Terdaftar Aktif : ${databaseCRM.length} Klien`);
};

jalankanCRMTracker();
