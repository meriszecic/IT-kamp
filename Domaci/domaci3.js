var max = 0;

for (let index = 0; index < 5; index++) {
  broj = Number(prompt("Unesite broj:   "));
  console.log(broj);

  if (i === 0) {
    var max = broj;
  }

  if (broj > max) {
    max = broj;
  }
}

console.log("max je:");
