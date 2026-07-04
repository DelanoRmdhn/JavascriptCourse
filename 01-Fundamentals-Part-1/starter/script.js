//DAY 5

/*

STATEMENT & EXPRESSION

Statement = menjalankan sebuah aksi atau instruksi tapi dia di treat BUKAN sebagai nilai. contoh : if-else, switch, let a = 12.
Expression = Expression menghasilkan sebuah nilai. contoh = 2+4,1994,"Delano"


CONDITIONAL OPERATOR / TERNARY OPERATOR
Mirip seperti if else namun yang membedakan adalah Conditional Operator ialah  operator kondisional yang bentuknya expression.
*/

let umur = 19;
const usiaLegal = umur >= 18 ? "Kamu sudah dewasa" : "Kamu masih bocil";
console.log(usiaLegal);

console.log(
  `Hai Nama Saya Delano, umur saya ${umur} dan ini menandakan bahwa saya ${umur >= 18 ? "Sudah Dewasa" : "Masih Bocil"}`,
);

let nilai = 85;
const grade = nilai >= 75 ? "Lulus" : "tidak lulus";
console.log(grade);
