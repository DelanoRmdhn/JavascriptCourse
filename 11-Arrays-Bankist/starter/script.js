'use strict';

//MINI TASK DAY 16 :DOM Selection, Array .forEach(), Template Literals, & Dynamic HTML Rendering

/*
Inisialisasi Data Agen:

Buat array bernama daftarKomisi berisi daftar objek agen:

JavaScript
const daftarKomisi = [
  { nama: "Rangga Pratama", proyek: "Desain Arsitek Villa Pekalongan", komisi: 4500000 },
  { nama: "Fadhil Nugraha", proyek: "Redesign Interior Kantor Tangerang", komisi: 3200000 },
  { nama: "Yohana Sitorus", proyek: "Pengembangan App CRM Bandung", komisi: 6000000 },
];
DOM Selection:

Tangkap elemen container #commission-list dari DOM menggunakan document.querySelector('#commission-list') atau document.getElementById('commission-list').

Iterasi & Rendering Menggunakan .forEach():

Jalankan perulangan .forEach() pada array daftarKomisi.

Di dalam .forEach(), susun elemen HTML kartu (card) menggunakan Template Literals.

Sisipkan/Tambahkan elemen kartu tersebut ke dalam container #commission-list.

Pastikan angka komisi di-format ke dalam mata uang Rupiah menggunakan .toLocaleString('id-ID').

4. Target Tampilan HTML di Browser:
Elemen #commission-list harus terisi elemen-elemen HTML dengan struktur seperti ini:

HTML
<div class="card">
  <div class="agent-name">Rangga Pratama</div>
  <div>Proyek: Desain Arsitek Villa Pekalongan</div>
  <div class="commission">Komisi: Rp 4.500.000</div>
</div>

<div class="card">
  <div class="agent-name">Fadhil Nugraha</div>
  <div>Proyek: Redesign Interior Kantor Tangerang</div>
  <div class="commission">Komisi: Rp 3.200.000</div>
</div>

<div class="card">
  <div class="agent-name">Yohana Sitorus</div>
  <div>Proyek: Pengembangan App CRM Bandung</div>
  <div class="commission">Komisi: Rp 6.000.000</div>
</div>
*/

const daftarKomisi = [
  {
    nama: 'Rangga Pratama',
    proyek: 'Desain Arsitek Villa Pekalongan',
    komisi: 4500000,
  },
  {
    nama: 'Fadhil Nugraha',
    proyek: 'Redesign Interior Kantor Tangerang',
    komisi: 3200000,
  },
  {
    nama: 'Yohana Sitorus',
    proyek: 'Pengembangan App CRM Bandung',
    komisi: 6000000,
  },
];

const showCommisionList = function (commissions) {
  const comListEl = document.getElementById('commission-list');

  commissions.forEach(function ({ nama, proyek, komisi }, i) {
    const generateCard = `
      <div class="card">
        <div class="agent-name">${nama}</div>
        <div>Proyek: ${proyek}</div>
        <div class="commission">Komisi: Rp ${komisi.toLocaleString('id-ID')}</div>
      </div>`;

    comListEl.insertAdjacentHTML('beforeend', generateCard);
  });
};
showCommisionList(daftarKomisi);
