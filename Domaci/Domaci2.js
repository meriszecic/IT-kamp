var brParnih = 0;
var brNeparnih = 0;

for (let i = 0; i < 5; i++) {
  broj = Number(prompt("Unesite broj:   "));
  if (broj % 2 === 0) {
    brParnih += 1;
    // console.log(broj, " - je paran");
  } else {
    brNeparnih += 1;

    // console.log(broj, " - je neparan");
  }
}

console.log(brParnih);
console.log(brNeparnih);
