// const cars = ["BMW", 123, false, "Volvo", "Saab", 12.5];

// cars.forEach((el) => {                                   // za svaki element radi nesto sto se zadaje i vazi uslov za svaki element

//     console.log(el);
// })

//============================================================
//============================================================

// const cars = ["BMW", 123, false, "Volvo", "Saab", 12.5];

// arr1 = cars.filter((el) => {
//     if(typeof el === "number")                              // pravi novi niz u kojem se nalaze samo element koji ispunjvaju uslov i toliko ih ima u nizu
//     return el
// })

//============================================================
//============================================================

// const cars = [32, 123, 2, 65, 1, 12.5];

// cars.some((el) => {
//     return el > 6                                               // provera da li makar 1 element u nizu ispunjava uslov i vraca true ili false
// })

//============================================================
//============================================================

// const cars = [32, 123, 2, 65, 1, 12.5];

// cars.every((el) => {
//   return el > 6; // provera da li svaki element u nizu ispunjava uslov , ako i 1 element koji ne ispunjava uslov funkcija je flase
// });

//============================================================
//============================================================

// const cars = [32, 123, 2, 65, 1, 12.5];

// const sumWithIntial = cars.reduce((preVolue, currVolue) => {
//   console.log(preVolue);
//   console.log(currVolue);
//   console.log(preVolue + currVolue);
//   console.log("==========================");
//   return preVolue + currVolue;
// }, 0);

//============================================================
//============================================================

// function findMissong(arr1, arr2) {
//   arr2.forEach((el) => {
//     if (arr1.includes(el)) {
//       arr1.splice(arr1.indexOf(el), 1);
//     }
//   });

//   return arr1;
// }

// res = findMissong([32, 123, 2, 65, 1, 12, 21, 41,], [32, 123, 2, 65, 1, 12, 51])

// console.log(res)

//============================================================
//============================================================

// const heros = [
//   { name: "Spier-man" },
//   { name: "Thor" },
//   { name: "Black Panter" },
//   { name: "Capetan Marvel" },
//   { name: "Silver Surfer" },
// ];

// const heros2 = heros.map((el, index) => {
//   return {
//     id: index,
//     hero: el.name,
//   };
// });

// console.log(heros2)

//============================================================
//============================================================

