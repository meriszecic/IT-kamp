// function reverse(n){
//     n.toString()
//     arr - []
//     for (let i = n.lenght - 1; i >= 0; i--) {
//         arr.push(parseInt(n[i]))

//     }
//     return arr
// }
// reverse(n)

// ==============================================================

// function find(niz) {
//   min1 = niz[0];
//   min2 = niz[0];

//   for (el of niz) {
//     if (min1 > el) {
//       min1 = el;
//     } else if (min2 > el && min1 < el) {
//       min2 = el;
//     }
//   }
//   console.log("Najmanji je: ", min1);
//   console.log(" Drugi najmanji je: ", min2);
// }

// find([3, 5, 2, 6, 2, 3, 6]);

// ==============================================================

// function find(niz) {
//   max = niz[0];
//   for (el of niz) {
//     if (Math.abs(max) <= Math.abs(el)) {
//       max = el;
//     }
//   }
//   console.log("Broj sa najvise cifara je: ", max);
// }
// find([3, 54, 34, 76, 45, 6, 765, 5555, 4, 4, -11111, 1111123213123]);

//======================================================================

// function sort(niz) {
//   for (let i = 0; i < niz.length; i++) {
    // if (niz[i] === 0) {
    //   niz.splice(i, 1);
    //   niz.push(0);
    // }
//   }
//   console.log(niz);
// }
// sort = [3, 0, 23, 54, 0, 123, 0, 32, 63];

// =========================================================================

// sort = [3, 0, 23, 54, 0, 123, 0, 32, 63];

// function find(niz) {
//   sum = 0;
//   for (el of niz) {
//     sum += el;
//   }
//   console.log("Avrage is: ", Math.ceil(sum / niz.lenght));
// }
// find(sort);

// ==============================================================================