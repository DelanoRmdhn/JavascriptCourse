'use strict';

/* 
Wah, ini dia WEEKLY MINI PROJECT 4: Strict Scope & Engine Rules Sandbox! 🚀🔥

Proyek mingguan kali ini didesain khusus untuk menguji pemahamanmu secara mendalam tentang JavaScript Engine Rules, Execution Context, Hoisting, Lexical Scoping / Closure, dan Strict Mode.

Di dunia nyata (terutama saat menggunakan framework seperti Next.js), memahami bagaimana JavaScript Engine mengeksekusi kode di balik layar (Behind the Scenes) adalah pembeda utama antara developer kasual dengan Software Engineer sejati. Proyek ini akan menjadi sandbox laboratorium tempat kamu mendeteksi, memperbaiki, dan merancang arsitektur alur variabel yang aman dari bug scoping.

Berikut adalah spesifikasi proyek murni tanpa clue kode agar kamu bisa mengeksplorasi dan membedah perilakunya secara mandiri di VS Code!

SPECIFICATION: WEEKLY MINI PROJECT 4
Nama Project: Strict Scope & Engine Rules Sandbox

Studi Kasus: Engine Safeguard & Variable Isolation untuk PT. CAHAYA REMBULAN SEJATI

Skenario
Sistem internal agensimu memiliki modul kalkulator keuangan dan pemproses data proyek. Namun, karena ada beberapa penulisan variabel yang tidak disiplin, terjadi kebocoran scope (global pollution) dan kesalahan hoisting yang berisiko merusak data transaksi klien. Kamu diminta membuat file Sandbox Isolasi Scope untuk mengamankan seluruh alur eksekusi variabel.

Fitur & Instruksi Tugas
1. Strict Mode & Global Pollution Guard:

Wajib aktifkan "use strict"; di baris paling atas.

Buat sebuah fungsi arrow bernama inisialisasiSistem.

Di dalam fungsi ini, coba simulasikan pembuatan data konfigurasi agensi. Pastikan semua variabel terdeklarasi menggunakan const atau let yang tepat sehingga tidak ada variabel acak yang terlempar ke Global Scope.

2. Hoisting & Temporal Dead Zone (TDZ) Audit:

Buat fungsi bernama auditPenawaranProyek.

Tunjukkan dan jelaskan pemahamanmu tentang beda perilaku antara Function Declaration (yang terkena hoisting penuh) dengan Function Expression / Arrow Function (yang masuk ke Temporal Dead Zone / TDZ jika dipanggil sebelum dideklarasikan).

Pastikan pemanggilan fungsi dilakukan dalam urutan alur eksekusi yang aman (clean execution order).

3. Closure & Private State (Kalkulator Diskon Agensi):

Buat sebuah fungsi bernama buatKalkulatorDiskon yang menerapkan konsep Closure / Private Lexical Scope.

Fungsi ini menerima parameter persenDiskonDefault (misal: 10 untuk 10%) dan mengembalikan (return) sebuah Inner Function.

Inner Function tersebut menerima parameter hargaKontrak dan mengembalikan nilai harga setelah dipotong diskon.

Nilai persenDiskonDefault harus bersifat private (tidak bisa diakses atau diubah langsung dari luar fungsi utama).

4. Block Scope Isolation (let / const vs var dalam Loop):

Buat fungsi bernama prosesAntreanKlien.

Lakukan perulangan (for loop) pada sebuah array nama klien: ["Studio Arsitek Garis Lurus", "Kontraktor Baja Mandiri", "CV. Berkah Abadi"].

Di dalam loop, gunakan variabel blok (let / const) untuk mencatat nomor antrean proyek. Pastikan variabel nomor antrean tersebut terisolasi sempurna di dalam blok loop dan tidak bocor keluar dari blok for.

Pelaporan Akhir (Console Output):

Panggil seluruh fungsi di atas dan cetak laporan hasil pengujian sandbox dengan rapi menggunakan Template Literals.

Target Tampilan Output Console:
Plaintext
=== SYSTEM SCOPE & ENGINE SAFEGUARD ===
Status Engine   : Strict Mode Active
Nama Agensi     : PT. CAHAYA REMBULAN SEJATI

--- TESTING CLOSURE (PRIVATE SCOPE) ---
Kontrak Normal  : Rp 5.000.000
Diskon Agensi   : 10%
Harga Akhir     : Rp 4.500.000

--- PROSES ANTREAN KLIEN (BLOCK SCOPE) ---
[Antrean #1] Studio Arsitek Garis Lurus
[Antrean #2] Kontraktor Baja Mandiri
[Antrean #3] CV. Berkah Abadi

============================================================
Audit Scope Selesai: Zero Global Leakage Detected!
*/

'use strict';

// ==========================================
// WEEKLY MINI PROJECT 4: Strict Scope & Engine Rules Sandbox
// Agensi: PT. CAHAYA REMBULAN SEJATI
// ==========================================

// 1. STRICT MODE & GLOBAL POLLUTION GUARD
const inisialisasiSistem = () => {
  // Semua variabel terisolasi menggunakan const/let di dalam local scope fungsi
  const namaAgensi = 'PT. CAHAYA REMBULAN SEJATI';
  let statusEngine = 'Strict Mode Active';

  return {
    namaAgensi,
    statusEngine,
  };
};

// 2. HOISTING & TEMPORAL DEAD ZONE (TDZ) AUDIT
// Function Declaration terkena hoisting penuh sehingga aman jika dipanggil di atas deklarasinya
function auditPenawaranProyek() {
  console.log('--- HOISTING & TDZ AUDIT ---');

  // Arrow Function / Function Expression berada di TDZ sebelum baris deklarasinya
  // Oleh karena itu, kita deklarasikan terlebih dahulu sebelum dipanggil (Clean Execution Order)
  const hitungRisiko = hargaKontrak => {
    return hargaKontrak > 7000000 ? 'Risiko Tinggi' : 'Risiko Standar';
  };

  const contohHarga = 8000000;
  const tingkatRisiko = hitungRisiko(contohHarga);

  console.log(
    `Evaluasi Proyek Rp ${contohHarga.toLocaleString('id-ID')} : Status ${tingkatRisiko}\n`,
  );
}

// 3. CLOSURE & PRIVATE STATE (KALKULATOR DISKON)
const buatKalkulatorDiskon = persenDiskonDefault => {
  // persenDiskonDefault terisolasi di private lexical scope
  return function (hargaKontrak) {
    const nominalDiskon = hargaKontrak * (persenDiskonDefault / 100);
    return hargaKontrak - nominalDiskon;
  };
};

// 4. BLOCK SCOPE ISOLATION
const prosesAntreanKlien = () => {
  const daftarKlien = [
    'Studio Arsitek Garis Lurus',
    'Kontraktor Baja Mandiri',
    'CV. Berkah Abadi',
  ];

  console.log('--- PROSES ANTREAN KLIEN (BLOCK SCOPE) ---');

  for (let i = 0; i < daftarKlien.length; i++) {
    // Variabel nomorAntrean terisolasi sempurna dalam blok loop (Block Scope)
    const nomorAntrean = i + 1;
    console.log(`[Antrean #${nomorAntrean}] ${daftarKlien[i]}`);
  }
  console.log('');
};

// ==========================================
// EXECUTION & FINAL REPORTING
// ==========================================
const jalankanSandbox = () => {
  const config = inisialisasiSistem();

  console.log(`=== SYSTEM SCOPE & ENGINE SAFEGUARD ===`);
  console.log(`Status Engine   : ${config.statusEngine}`);
  console.log(`Nama Agensi     : ${config.namaAgensi}\n`);

  // Eksekusi Audit Hoisting & TDZ
  auditPenawaranProyek();

  // Eksekusi Testing Closure (Private Scope)
  const hargaKontrakNormal = 5000000;
  const persenDiskon = 10;
  const hitungDiskonAgensi = buatKalkulatorDiskon(persenDiskon);
  const hargaAkhir = hitungDiskonAgensi(hargaKontrakNormal);

  console.log('--- TESTING CLOSURE (PRIVATE SCOPE) ---');
  console.log(
    `Kontrak Normal  : Rp ${hargaKontrakNormal.toLocaleString('id-ID')}`,
  );
  console.log(`Diskon Agensi   : ${persenDiskon}%`);
  console.log(`Harga Akhir     : Rp ${hargaAkhir.toLocaleString('id-ID')}\n`);

  // Eksekusi Block Scope Loop
  prosesAntreanKlien();

  console.log('============================================================');
  console.log('Audit Scope Selesai: Zero Global Leakage Detected!');
};

jalankanSandbox();
