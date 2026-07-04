//DAY 5

/*

SWITCH STATEMENT : digunakan ketika ingin membandingkan satu nilai dari banyak variabel lain. 
*/

const input = prompt("Masukan Hari Favoritmu : ");

switch (input) {
  case "senin":
    console.log(`Senin adalah Hari Favoritmu!`);
    break;

  case "selasa":
    console.log(`Selasa adalah Hari Favoritmu!`);
    break;

  case "rabu":
    console.log(`Rabu adalah Hari Favoritmu!`);
    break;
  case "Kamis":
    console.log(`Kamis adalah Hari Favoritmu!`);
    break;
  case "Jumaat":
    console.log(`Jumaat adalah Hari Favoritmu!`);
    break;
  case "Sabtu":
    console.log(`Sabtu adalah Hari Favoritmu!`);
    break;
  case "Minggu":
    console.log(`Minggu adalah Hari Favoritmu!`);
    break;

  default:
    console.log(`Tidak ada hari dengan nama ${input}`);
}
