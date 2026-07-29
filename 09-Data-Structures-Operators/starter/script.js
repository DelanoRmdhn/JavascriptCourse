'use strict';
/* 
MINI TASKS : 

SOAL PRAKTIKUM MANDIRI
Topik: Object Destructuring, Nested Destructuring, Aliasing, & Default Values

Studi Kasus: Sistem Ekstraksi Konfigurasi Server Agensi

Skenario
Agensi PT. CAHAYA REMBULAN SEJATI sedang menyiapkan integrasi koneksi ke server API tiruan (mock API) untuk menampilkan data proyek klien. Pihak backend mengirimkan objek konfigurasi yang berisi detail server, kredensial, dan opsi timeout.

Anda diminta untuk mengambil beberapa data penting dari objek konfigurasi bersarang tersebut menggunakan satu baris sintaks Destructuring ES6 agar kodenya tetap bersih dan scannable.

Instruksi Tugas
Inisialisasi Data Objek Konfigurasi:

Buat sebuah objek bernama apiConfig dengan struktur bersarang sebagai berikut:

JavaScript
const apiConfig = {
  serviceName: "CahayaCRM Engine",
  environment: "production",
  connection: {
    endpoint: {
      baseURL: "https://api.cahayarembulan.com/v1",
      port: 8080,
    },
    auth: {
      apiKey: "CRS-SECRET-KEY-9981",
    },
  },
};
Ekstraksi Data Menggunakan Destructuring (Wajib 1 Deklarasi const):

Lakukan destructuring pada objek apiConfig untuk mengambil data-data berikut sekaligus:

serviceName (ambil langsung).

baseURL yang berada di dalam connection -> endpoint (ubah nama variabelnya menjadi urlUtama menggunakan teknik aliasing).

apiKey yang berada di dalam connection -> auth.

timeout yang berada di dalam connection (karena properti timeout ini tidak ada di objek awal, berikan Default Value berupa angka 5000).

Output Console:

Cetak data-data hasil ekstraksi tersebut ke console browser menggunakan Template Literals dengan format pelaporan yang rapi.

Target Tampilan Output Console:
Plaintext
=== API CONNECTION CONFIGURATION ===
Nama Layanan : CahayaCRM Engine
URL Target   : https://api.cahayarembulan.com/v1
Secret Key   : CRS-SECRET-KEY-9981
Max Timeout  : 5000 ms
*/

const apiConfig = {
  serviceName: 'CahayaCRM Engine',
  environment: 'production',
  connection: {
    endpoint: {
      baseURL: 'https://api.cahayarembulan.com/v1',
      port: 8080,
    },
    auth: {
      apiKey: 'CRS-SECRET-KEY-9981',
    },
  },
};

const {
  serviceName,
  connection: {
    endpoint: { baseURL: urlUtama },
    auth: { apiKey },
    timeout = 5000,
  },
} = apiConfig;

console.log(
  `
  === API CONNECTION CONFIGURATION ===
  Nama Layanan ${serviceName}
  URL Target : ${urlUtama}
  Secret Key : ${apiKey}
  Max Timeout : ${timeout}
  `,
);
