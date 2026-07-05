/* PROJECT MINGGUAN 1 : Smart Cashier Console System 

Agensi web development kamu semakin berkembang. Untuk mempermudah tim keuangan dalam menerbitkan tagihan (invoice) secara instan saat klien menelepon, kamu diminta membuat sistem kasir berbasis teks di console browser.

Sistem ini harus menerima input nama klien, pilihan paket website, dan status kepemilikan kupon diskon member, lalu secara otomatis memproses data tersebut hingga menghasilkan struk tagihan resmi yang sudah termasuk perhitungan pajak.

Instruksi Tugas
Input Data (Simulasi Form Klien):

Ambil 3 data secara dinamis dari pengguna menggunakan fungsi prompt():

Nama Klien (Contoh input: "firma arsitek alaska" atau "" jika dikosongkan).

Pilihan Paket Website (User hanya boleh mengetik kata: "Landing Page" atau "Company Profile").

Kupon Diskon (User mengetik status kupon member: "MEMBER200" jika punya, atau dikosongkan/ketik apa saja jika tidak punya).

Aturan Validasi & Keamanan Data (Lapisan Pertama):

Lakukan normalisasi teks pada Nama Klien agar huruf pertamanya otomatis berubah menjadi huruf kapital (seperti improvisasimu di Day 5).

Gunakan sifat Truthy/Falsy untuk memeriksa Nama Klien. Jika user mengosongkan nama, sistem harus langsung berhenti dan memunculkan pesan error: "Akses Ditolak: Nama klien wajib diisi!".

Logika Penentuan Harga Dasar (Menggunakan switch):

Tentukan harga dasar proyek berdasarkan paket yang dipilih:

Jika "Landing Page", harga dasar = 1.500.000.

Jika "Company Profile", harga dasar = 3.000.000.

Jika user mengetik paket di luar dua pilihan tersebut, sistem harus membatalkan transaksi dengan pesan error: "Paket tidak valid!".

Logika Pemotongan Diskon (Menggunakan Ternary Operator):

Periksa string kupon yang dimasukkan oleh user menggunakan Ternary Operator dalam satu baris kode:

Jika kupon yang diketik tepat bernilai "MEMBER200", maka klien mendapatkan potongan sebesar 200.000 dari harga dasar.

Jika kupon salah atau kosong, potongan harganya adalah 0.

Kalkulasi Finansial Akhir:

Hitung Harga Setelah Diskon (Harga Dasar dikurangi Potongan Diskon).

Hitung Nominal Pajak PPN (11%) yang diambil dari Harga Setelah Diskon.

Hitung Total Biaya Akhir yang wajib dibayar (Harga Setelah Diskon ditambah Nominal Pajak).

Output Tampilan Struk Resmi:

Jika seluruh validasi di atas lolos, cetak struk belanja ke console browser menggunakan Template Literals murni dengan format persis seperti di bawah ini:

Plaintext
=============================================
         PT. CAHAYA REMBULAN SEJATI          
               INVOICE RESMI                 
=============================================
Klien Terhormat    : [Nama Klien Berhuruf Kapital]
Paket Terpilih     : [Nama Paket Website]
Harga Dasar Paket  : Rp.[Nominal]
---------------------------------------------
Potongan Diskon    : Rp.[Nominal]
Harga Setelah Disc : Rp.[Nominal]
PPN Pajak (11%)    : Rp.[Nominal]
=============================================
TOTAL TAGIHAN      : Rp.[Total Akhir]
=============================================
*/

const inputNamaClient = prompt("Isi Nama Klien :");
const inputJenisPaket = prompt(
  "Pilih Jenis Paket (Landing Page / Company Profile) : ",
);
const inputKuponDiskon = prompt(
  "Masukan Kode Kupon (kosongkan apabila tidak ada): ",
);
let isTrue = true;

//Kapitalisasi Nama awal Client
let namaKlien;
if (!inputNamaClient) {
  isTrue = false;
  console.log(`Akses Ditolak : Nama Klien Wajib diisi!`);
} else {
  namaKlien =
    inputNamaClient.charAt(0).toUpperCase() + inputNamaClient.slice(1);
}

//slicing jenisPaket
let jenisPaket;
if (inputJenisPaket && inputJenisPaket.includes(" ")) {
  let [kata1, kata2] = inputJenisPaket.split(" "); //pisahin spasi
  kata1 = kata1.charAt(0).toUpperCase() + kata1.slice(1); //kapitalisasi awal huruf
  kata2 = kata2.charAt(0).toUpperCase() + kata2.slice(1); //kapitalisasi awal huruf
  jenisPaket = kata1 + " " + kata2;
} else if (inputJenisPaket) {
  jenisPaket =
    inputJenisPaket.charAt(0).toUpperCase() + inputJenisPaket.slice(1);
}

// If else Statement Pemilihan Paket
let hargaPaket;
if (isTrue) {
  switch (jenisPaket) {
    case "Landing Page":
      hargaPaket = 1500000;
      break;

    case "Company Profile":
      hargaPaket = 3000000;
      break;

    default:
      isTrue = false;
  }
}

//DEKLARASI VARIABEL PERHITUNGAN

/*INVOICE*/
if (isTrue) {
  const discountMember = inputKuponDiskon === "MEMBER200" ? 200000 : 0; //cek diskon
  const hargaSetelahDiskon = hargaPaket - discountMember;
  const hitungPPN = (hargaPaket - discountMember) * 0.11;

  console.log(`=============================================`);
  console.log(`         PT. CAHAYA REMBULAN SEJATI          
               INVOICE RESMI                 `);
  console.log(`=============================================`);
  console.log(`Klien Terhormat : ${namaKlien}`);
  console.log(`Harga Dasar Paket : Rp.${hargaPaket}`);
  console.log(`---------------------------------------------`);
  console.log(`Potongan Diskon : Rp.${discountMember}`);
  console.log(`Harga Setelah Diskon : Rp.${hargaSetelahDiskon}`);
  console.log(`PPN Pajak (11%) : Rp.${hitungPPN}`);
  console.log("=============================================");
  console.log(`Total Tagihan Akhir : Rp.${hargaSetelahDiskon + hitungPPN}`);
  console.log("=============================================");
}
