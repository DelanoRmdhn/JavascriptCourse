//MINI TASK HARIAN DAY 4

/*
Sistem penerimaan formulir digital pada website agensi Anda menangkap dua data mentah dari calon klien. Data pertama adalah nominal anggaran proyek yang masuk ke sistem dalam bentuk teks. Data kedua adalah nama instansi klien, namun ada indikasi data tersebut kosong karena user langsung menekan tombol submit tanpa mengisi form.

Sebagai penanggung jawab backend log, Anda diminta membuat skrip pemrosesan data untuk:

Menyelamatkan data anggaran teks agar bisa dioperasikan secara matematis dengan tipe data yang benar.

Melakukan pengujian keamanan untuk memastikan sistem menolak memproses data jika ditemukan nilai-nilai yang tidak valid (falsy).

Instruksi Tugas
Deklarasikan dua variabel dengan nilai awal persis seperti di bawah ini (menyimulasikan data mentah dari form web):

const rawBudget = "2500000";

const rawClientName = "";

Lakukan konversi tipe data yang sesuai pada variabel rawBudget secara eksplisit, lalu simpan hasil konversinya ke dalam variabel baru bernama validBudget.

Buatlah struktur pengecekan kondisi untuk menguji variabel rawClientName dengan memanfaatkan sifat Truthy/Falsy bawaan JavaScript.

Tampilkan seluruh hasil pemrosesan tersebut ke dalam console browser dengan format informasi yang terstruktur seperti target di bawah ini:

Target Output di Console Browser:

Plaintext
=== LOG VALIDASI INPUT ===
Tipe data awal budget: string
Tipe data setelah diproses: number
Kalkulasi Budget + Bonus Rp500.000: [Tampilkan hasil penjumlahan validBudget dengan angka 500000]
Status Validasi Nama: Gagal, data klien terdeteksi Falsy!

*/

const inputAnggaran = prompt("Masukan Nilai Anggaran : ");
const inputNamaClient = prompt("Nama Client : ");

//konversi
const anggaran = Number(inputAnggaran);

//TAMPILAN LOG
console.log(`Tipe data awal budget : ${typeof inputAnggaran}`);
console.log(`Tipe data setelah diproses  : ${typeof anggaran}`);

if (inputNamaClient) {
  console.log(
    `Hasil Penjumlahan Anggaran + Bonus : Rp.${anggaran + 500000} \nSelamat ${inputNamaClient}`,
  );
} else {
  console.log("Validasi Gagal!. Client tidak menginputkan nama!");
}
