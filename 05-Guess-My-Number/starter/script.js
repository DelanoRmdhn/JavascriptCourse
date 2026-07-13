'use strict';

/* 
WEEK 3 : DOM & EVENTS IN JAVASCRIPT

//DOM : DOM (Document Object Model) adalah representasi berbentuk object dari dokumen HTML yang dibuat oleh browser sehingga JavaScript dapat membaca, mengakses, dan memanipulasi halaman web.

DOM bukan bagian dari HTML maupun JavaScript. DOM adalah Web API yang disediakan oleh browser sebagai representasi object dari halaman web agar dapat diakses dan dimanipulasi menggunakan JavaScript.

Browser mengubah dokumen HTML menjadi sekumpulan object yang disebut DOM Tree. JavaScript kemudian dapat memanipulasi object-object tersebut melalui DOM API.

DOM bukanlah data HTML itu sendiri, melainkan representasi HTML yang sedang aktif di dalam browser.
*/

//Mengakses elemen HTML
const paragraph = document.querySelector('.between');
console.log(paragraph);
console.dir(paragraph); // untuk melihat object yang dimiliki paragraph ada apa saja

//Sett nilai / mengubah nilai
paragraph.textContent = 'Halooo Delano!';

//Sett nilai untuk tag input
const angkaTebakan = document.querySelector('.guess');
angkaTebakan.value = 11; //set value sebelumnya kosong menjadi 11

console.log(angkaTebakan.value);

/* 
textContent = digunakan apabila terdapat isi diantara tag pembuka dan penutup.

value = digunakan untuk void element 
*/
