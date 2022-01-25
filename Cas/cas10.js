// slice

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// animals.slice(2, 5)
/// od do u nizu  ///

// var1 = 23;

// console.log(typeof var1);
/// pokazuje koja je vrednst elementa  ///

// arr1 = [["a", 1, false][("b", 2, true)]];

// res = [[], [], []];

// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
//   arr1[i] = row;
//   for (let j = 0; j < row.length; j++) {
//     if (typeof arr1[i][j] === "string") {
//       res[0].push(arr1[i][j]);
//     } else if (typeof arr1[i][j] === "number") {
//       res[1].push(arr1[i][j]);
//     } else if (typeof arr1[i][j] === "boolean") {
//       res[2].push(arr1[i][j]);
//     }
//   }
// }
// console.log(niz1);

// arr = [58, "", "abcd", true, null, false, 0];

// // [58, "abcd, true"]

// res = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Boolean(arr[i])) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

niz = ["b", 6, "a", "q", 7, 2];

res = [];

for (let i = 0; i < niz.length; i++) {
  if (typeof niz[i] === "number") {
    res.unshift(niz[i]);
  } else {
    res.push(niz[i]);
  }
}
console.log(res);
