function stray(numbers) {
  num = 0;
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    num = numbers[0]; // ako prvi index brojeva razlicit od drugog, broj drugog indexa i broj rpvog indexa bic razliciti broju receg indexa
  }
  if (
    numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
    numbers[numbers.length - 1] !== numbers[numbers.length - 3]
  ) {
    //ako je broj iz niza - 1 razlicit od broja iz niza - 2 i ako broj iz niza -1 razlicit od broja iz niza -3
    num = numbers[numbers.length - 1];
  } // onda je num = tom broju - 1
  for (let i = 1; i < numbers.length - 1; i++) {
    //proazak kroz te brojeve
    if (numbers[i] != numbers[i - 1] && numbers[i] != numbers[i + 1]) {
      // ako ...
      num = numbers[i];
      break;
    }
  }

  return num;
}

console.log(stray([1, 1, 1, 9, 1, 1, 1, 1, 1]));
console.log(stray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]));
console.log(stray([1, 1, 1, 17, 1, 1, 1, 1, 1, 1, 1, 1]));

// =========================================================================================
// =========================================================================================

// function inverseSlice(items, a, b) {
//   rez = items.slice(0, a)
//   rez1 = items.slice(b);
//   rez = rez.concat(rez1);
//   return rez;
// }

// console.log(inverseSlice([3, 0, 23, 54, 10,]));

// =========================================================================================
// =========================================================================================

function change(niz) {
  pomArr = s.split(" "); // deljenje niza na razmaku
  let rez = []; // pravljenje pomocnog niza
  for (let i = 0; i < s.length; i++) {
    // prolazak kroz taj niz
    if (pomArr[i] !== pomArr[[i + 1]]) {
      // ako je razlicit elemnt od onog ispred
      rez.push(pomArr[i]);
    } // ubaci ga u niz
  }
  return rez.join(" ");
  // spoji reci
}
console.log(change("a a b c g a a b c"));
