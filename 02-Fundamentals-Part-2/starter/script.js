"use strict";

//MINI TASK MINGGU 2 DAY 8 : OBJECT

/*SOAL 2
Topik: Object Properties, Object Methods, & Kata Kunci this

Studi Kasus: Sistem Manajemen Piutang Klien UMKM Arsitektur

Skenario
Agensi PT. CAHAYA REMBULAN SEJATI baru saja mendapatkan proyek pembuatan Company Profile dari sebuah UMKM Firma Arsitektur lokal. Untuk menjaga arus kas (cash flow) agensi tetap sehat, Anda diminta membuat sebuah sistem objek digital yang mampu mencatat data kontrak pengerjaan serta menghitung secara otomatis apakah klien tersebut sudah melunasi pembayarannya sesuai kesepakatan atau belum.

Instruksi Tugas
Inisialisasi Data Objek:

Buatlah sebuah objek bernama klienUMKM.

Di dalam objek tersebut, buat properti-properti berikut beserta nilainya:

namaPerusahaan: "Studio Arsitek Garis Lurus"

jenisPaket: "Company Profile"

totalKontrak: 5000000 (Angka murni nominal Rp5.000.000)

jumlahYangDibayar: 3500000 (Angka murni nominal Rp3.500.000)



Buat Fungsi Internal (Object Method):

Di dalam objek klienUMKM yang sama, buat sebuah method bernama cekStatusPelunasan.

Method ini tidak boleh menerima parameter dari luar. Dia harus memanfaatkan kata kunci this untuk mengakses data keuangan miliknya sendiri di dalam objek.

Logika Pengamanan Keuangan:

Hitung sisa tagihan secara mandiri di dalam fungsi tersebut.

Jika jumlahYangDibayar bernilai sama dengan atau lebih besar dari totalKontrak, method harus mengembalikan (return) teks: "Lunas! Proyek siap dideploy ke server Next.js."

Jika jumlahYangDibayar masih kurang dari totalKontrak, method harus mengembalikan teks yang dinamis: "Belum Lunas! Kurang Rp.[nominal_sisa_tagihan]. Tolong hubungi pihak klien." (Hitung sisa uangnya secara dinamis).

Output Console:

Cetak header pelaporan keuangan yang rapi ke console.

Panggil method klienUMKM.cekStatusPelunasan() di dalam console.log() untuk melihat hasil evaluasi sistem secara nyata.

Target Tampilan Output Console:
Plaintext
=== FINANSIAL LOG KLIEN UMKM ===
Perusahaan      : Studio Arsitek Garis Lurus
Paket Layanan   : Company Profile
Status Finansial: Belum Lunas! Kurang Rp.1500000. Tolong hubungi pihak klien.
*/

const klienUMKM = {
  namaPerusahaan: "Studio Arsitek Garis Lurus",
  jenisPaket: "Company Profile",
  totalKontrak: 5000000,
  jumlahYangDibayar: 3500000,

  cekStatusPelunasan: function () {
    return this.jumlahYangDibayar >= this.totalKontrak
      ? `Lunas! Proyek siap dideploy ke server Next.js`
      : `Belum Lunas! Kurang Rp. ${this.totalKontrak - this.jumlahYangDibayar}. Tolong hubungi pihak klien!`;
  },
};

console.log(`=== FINANSIAL LOG KLIEN UMKM ===\n
Perusahaan      : ${klienUMKM.namaPerusahaan}\n
Paket Layanan   : ${klienUMKM.jenisPaket}\n
Status Finansial: ${klienUMKM.cekStatusPelunasan()}`);
