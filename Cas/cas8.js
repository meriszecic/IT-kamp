// prviNiz = [22, 55, 78, 64, 3];
// drugiNiz = [];

// console.log(prviNiz);
// console.log(drugiNiz);

// for (let i = 0; i < prviNiz.length; i++) {
//   drugiNiz.push(prviNiz[i]);
// }

// prviNiz = [];

// console.log(prviNiz);
// console.log(drugiNiz);






var a = [[3, 5, 2], [8, 11 , 4], [7, 8, 10]];

console.log("prvi red - ", a[0])
console.log("drugi red - ", a[1])
console.log("treci red - ", a[2])

for (let i = 0; i < a.length; i++) {
    const row = a [i];
    red = "";
    for (let j = 0; j < row.length; j++) {
        const el = row[j];
        red += el + "\t"; 
    }
    console.log(red);
}