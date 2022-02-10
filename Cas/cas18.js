// (function (arg1) {                                       // iife funkcija
//   for (let i = 0; i < 10; i++) {
//     console.log(arg1, i);
//   }
// })("Hello");

// ===============================================================
// ===============================================================

// covek1 = {                                               // objekti
//   name: "Meris",
//   surname: "Zecic",
//   birthdate: "07.07.2005",
//   location: "NP",
// };
// console.log(covek1.name);
// console.log(covek1);
// console.log(covek1 + "NESTO");

// ===============================================================
// ===============================================================

// covek1 = {
//   name: "Meris",
//   surname: "Zecic",
//   birthdate: "07.07.2005",
//   location: "NP",
// };

// covek2 = covek1;                                             
///////covek2 bice jednak coveku jedan i samim tim uzece sve njegove elemente koji se kasnije nece menjati vec ce biti isti ako na zadnjoj promeni u objektu covek2

// console.log(covek1);
// console.log(covek2);

// console.log("========================================");

// covek2.name = "Dzemil";

// console.log(covek1);
// console.log(covek2);

// ===============================================================
// ===============================================================

// covek1 = {
//   name: "Meris",
//   surname: "Zecic",
//   birthdate: "07.07.2005",
//   location: "NP",
//   job: function(){
//       console.log("Doing some job")
//   }
// };

// covek2 = { ...covek1 };
// kopirace elemte iz obekta covek jedan i daljim promenama nece se menjati i elemti u objektu covek1

// console.log(covek1);
// console.log(covek2);

// covek2.name = "Dzemil";

// console.log("========================================");

// console.log(covek1);
// console.log(covek2);

// console.log(Object.keys(covek1));
// console.log(Object.values(covek1));

// covek1.job()

// ===============================================================
// ===============================================================

// covek1 = {
// name: "Meris",
// surname: "Zecic",
// birthdate: "07.07.2005",
// location: "NP",
// job: function(){
//     console.log("Doing some job")
// }
// };

// console.log(covek1);
// console.log(covek2);

// covek2.name = "Dzemil";

// console.log("========================================");

// console.log(covek1);
// console.log(covek2);

// console.log(Object.keys(covek1));
// console.log(Object.values(covek1));

// covek1.job()
// pozivanje funkcije iz objekta, moze se pozvati samo ovakvim pozivanjem inace nece prikazati tu funkiju

// ===============================================================
// ===============================================================

// covek1 = {
//   name: "Meris",
//   surname: "Zecic",
//   birthdate: "07.07.2005",
//   location: {
//     country: "SRB",
//     city: "NP",
//   },
// };
// console.log(covek1.location.city);

// covek2 = { ...covek1, location: { ...covek1.location } };
//  kopiranje svih elemanta i podobjekata u nizu

// covek2.location.city = "VA";

// console.log("========================================");
// console.log(covek1);
// console.log(covek2);

// ===============================================================
// ===============================================================
