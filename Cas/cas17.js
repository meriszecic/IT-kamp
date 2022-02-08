// function sort(niz) {
//   for (let i = 0; i < niz.length; i++) {            // prolazi kroj niz tih brojeva
//     for (let j = 0; j < niz.length; j++) {          // uporedjuje brojeve iz niza npr.. 1 prema 1 pa 1 prema 2 ....
//       if (niz[i] < niz[j]) {                        // ako je broj iz niza [i] manji od broja niza [j]
//         let pom = niz[i];                           // pom ce biti jednak nizu [i]
//         niz[i] = niz[j];                            // niz [i] bice jednak broju niza [j]
//         niz[j] = pom;                               //  broj niza [j] bice jedna pomocnij pom
//       }
//     }
//   }
//   console.log(niz);
// }

// console.log(sort([45, 435, 12, 65, 8, 2, 30]));

// ==========================================================================
// ==========================================================================

// function nbYear(p0, percent, aug, p) {
//   let n = 0;
//   while (p0 < p) {
//     p0 = p0 + (p0 * percent) / 100 + aug;
//     n=n+1;
//   }
//   return n
// }
// console.log(nbYear([1500, 5, 100, 5000]));

// ==========================================================================
// ==========================================================================

function openOrSenior(data) {
  arr = []; // prazan pomocni niz
  for (let i = 0; i < data.length; i++) {
    // prolazenje kroz taj niz
    if (data[i][0] >= 55 && data[i][1] > 7) {
      // ako je broj iz niza [i] koji se nalazi na prvom mestu pod indexom 0 veci ili jednak od 55 i broj iz niza [i] koji se nalazi na drugom mestu pod indexom 1 veci od 7
      return arr.push(data); // staviti ga na zadnje mesto u nizu data
    } else {
      // u suprotnom
      return "open"; // napisati "open"
    }
  }
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
