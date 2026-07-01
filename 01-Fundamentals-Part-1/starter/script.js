/* MINI TASK HARIAN DAY 1 */

// 1. Values & Variables

/*SOAL 1
Values and Variables
Declare variables called country, continent and population and assign their values according to your own country (population in millions).

Log their values to the console.
*/

let country = "Indonesia";
let continent = "Asia";
let population = "240 Milion";

console.log("Country : " + country);
console.log("Continent : " + continent);
console.log("Population : " + population);

/*SOAL 2
Berikut adalah format Soal Praktikum Mandiri untuk Day 1, lengkap dengan skenario bisnis, instruksi pengerjaan, dan kriteria pengujian untuk melatih fundamental pemrograman kamu.

SOAL PRAKTIKUM MANDIRI - DAY 1
Topik: Pengenalan JavaScript, Eksternal File, Variabel, dan Tipe Data Dasar.
Studi Kasus: Pengaturan Awal Data Agensi Pembuatan Website UMKM.

Skenario Soal
Anda sedang membangun sebuah agensi digital yang berfokus pada jasa pembuatan website untuk UMKM dan Arsitek. Sebelum membuat tampilan UI yang kompleks di browser, Anda diminta oleh tim senior untuk menyiapkan fondasi arsitektur data awal agensi Anda di sisi JavaScript. Data ini nantinya akan digunakan untuk kalkulasi otomatis pada sistem kasir dan komponen React di masa mendatang.

Instruksi Tugas
Deklarasi Data Variabel (di dalam script.js):
Buatlah variabel-variabel berikut dengan memilih kata kunci deklarasi yang tepat (const atau let) berdasarkan sifat nilainya:

namaAgensi (Tipe Data: String): Berisi nama agensi web development pilihan Anda. (Nilai tidak boleh berubah).

tahunBerdiri (Tipe Data: Number): Tahun sekarang agensi Anda resmi berjalan (2026).

hargaLandingPage (Tipe Data: Number): Nilai harga dasar paket landing page (contoh: 4000000). Jangan gunakan titik atau koma sebagai pemisah ribuan.

hargaCompanyProfile (Tipe Data: Number): Nilai harga dasar paket company profile (contoh: 8000000).

isOpenForBooking (Tipe Data: Boolean): Menandakan status apakah agensi Anda saat ini sedang membuka kuota untuk klien baru atau tidak (true/false).

fiturUnggulan (Tipe Data: String): Kalimat pendek yang menjelaskan kelebihan desain agensi Anda (misal: "Integrasi Figma ke Code dengan Detail dan Presisi").

Output Pengujian:

Tampilkan semua variabel tersebut ke dalam Console Browser menggunakan perintah console.log().

Berikan label penjelas pada setiap output agar teks di console terbaca rapi oleh tim penguji.

Kriteria Penilaian & Kelulusan (Checklist Mandiri)
[ ] File HTML berhasil memuat file JS eksternal tanpa memicu error File not found.

[ ] Variabel nama agensi menggunakan const (karena nama perusahaan bersifat permanen).

[ ] Tipe data harga dideklarasikan sebagai Number murni (contoh: 4000000), BUKAN sebagai string bertanda kutip (seperti "4.000.000"), agar nantinya bisa dihitung secara matematis pada hari Selasa.

[ ] Variabel boolean ditulis murni tanpa tanda kutip (true / false).

[ ] Saat file HTML dibuka di browser dan ditekan F12 (Menu Console), data profil agensi tercetak dengan rapi tanpa ada Red Error Text (Syntax Error/Reference Error).

*/

const namaAgensi = "PT.CAHAYA REMBULAN SEJATI";
const tahunBerdiri = 2026;
let hargaLandingPage = 1500000;
let hargaCompanyProfile = 3000000;
let isOpenForBooking = true;
let fiturUnggulan = "Integrasi Figma ke Code dengan Detail dan Presisi";

console.log("Nama Agensi : " + namaAgensi);
console.log("Tahun Berdiri : " + tahunBerdiri);
console.log("Harga Landing Page : " + hargaLandingPage);
console.log("Harga Company Profile : " + hargaCompanyProfile);
console.log("Apakah kita sedang open for booking : " + isOpenForBooking);
console.log("Fitur Unggulan : " + fiturUnggulan);

/*REASON PEMILIHAN VARIABLE

1. const = variable namaAgensi & tahunBerdiri kita pilih menggunakan const karena nilainya bersifat tetap dan tidak akan diganti kedepannya. --> nilai Statis

2. let = variable selain namaAgensi & tahunBerdiri kita pilih menggunakan let karena kedepannya bisa jadi saya mau melakukan perubahan value pada variable variable tersebut. --> Nilai Dinamis
*/

// MINI TASK HARIAN DAY 2

// SOAL 1

/**
Topik: Basic Operators, Operator Precedence, dan Re-assigning Variable.
Studi Kasus: Sistem Kalkulasi Pajak Invoice Digital "PT. CAHAYA REMBULAN SEJATI".

Klien pertama Anda, sebuah firma arsitektur, sepakat untuk mengambil paket Company Profile yang ada pada data internal agensi Anda. Namun, sebelum invoice final diterbitkan, terjadi dua kondisi:

Pihak agensi memberikan potongan harga sebesar Rp 200.000 langsung pada harga dasar paket tersebut.

Pemerintah memberlakukan kebijakan pajak pertambahan nilai (PPN) sebesar 11% yang dihitung dari harga dasar proyek yang baru (setelah dipotong harga).

Sebagai developer, Anda diminta untuk memproses transaksi ini di dalam file JavaScript agar sistem mengeluarkan laporan keuangan yang valid.

Instruksi Tugas
Proses data finansial di atas menggunakan operator-operator JavaScript yang sesuai sehingga menghasilkan output akhir di console browser dengan format informasi sebagai berikut:

Harga Paket Awal: (Menampilkan harga sebelum ada penyesuaian)

Harga Paket Setelah Potongan: (Menampilkan harga setelah dikurangi potongan)

Beban Pajak PPN (11%): (Menampilkan nominal uang pajaknya saja)

Total Tagihan Akhir: (Menampilkan jumlah dana bersih yang wajib ditransfer oleh klien)
 */

const hargaPaketAwal = 1500000;
const hargaDiscount = 200000;

const ppn = (hargaPaketAwal - hargaDiscount) * 0.11;
const totalAkhir = hargaPaketAwal - hargaDiscount + ppn;
console.log("=========== INVOICE PEMBELIAN ===========");
console.log("Harga : Rp." + hargaPaketAwal);
console.log("Harga setelah discount : Rp." + (hargaPaketAwal - hargaDiscount));
console.log("PPN (11%) : Rp." + ppn);
console.log("=============================");
console.log("Total Biaya : Rp." + totalAkhir);
