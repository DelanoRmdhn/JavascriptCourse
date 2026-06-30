console.log("Hello World");

/*
Values VS Variable

Values : adalah nilai. contoh : 23, "Delano", undefined, True, False. 
Variable : adalah tempat untuk menyimpan nilai. contoh : let nama = "Delano"
*/

// Contoh Implementasi Values
console.log("Nama Panjang saya adalah Delano Bariq Ramadhan"); // "Delano Variq Ramadhan" adalah sebuah nilai

//contoh implementasi Variables
let namaPanjang = "Nama Panjang saya adalah Delano Bariq Ramadhan";
console.log(namaPanjang); // untuk mendapatkan nilai kita memanggil variabel.

// contoh pemanggilan secara bersamaan
let namaPanggilan = "Delano";
console.log(
  "Halo Semuanya, " + namaPanjang + " biasa dipanggil" + namaPanggilan,
); // "Halo Semuanya" & "biasa dipanggil" adalah sebuah values. namaPanjang & namaPanggilan adalah sebuah variable
