//DAY 4

/*
TRUTHY VS FALSY VALUES

adalah nilai yang dikategorikan sebagai benar dan salah.

contoh truthy values               contoh falsy values
1. angka selain 0                  1. 0            
2. {}                              2. NaN
3. String yang ada isinya          3. Undefined
*/

//contoh falsy
let money = 0;
if (money) {
  console.log(`Foya Foya dlu ga siee :)`);
} else {
  console.log(`Nabung bro duit kamu Rp.${money} di bank :(`);
}

//contoh Truthy
money = 100;
if (money) {
  console.log(`Foya Foya dlu ga siee :)`);
} else {
  console.log(`Nabung bro duit kamu Rp.${money} di bank :(`);
}
