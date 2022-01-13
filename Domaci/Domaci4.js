// for (let i = 0; i < 1000; i+=3){
//     console.log(i)
// }
// for (let i = 0; i < 1000; i+=5){
//     console.log(i)
// }
var suma = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    suma += i;
  }
}

console.log(suma);
