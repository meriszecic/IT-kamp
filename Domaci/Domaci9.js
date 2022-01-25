niz1 = [
  [0, 2, 1, 24],
  [8, 0, 9, 4],
  [7, 0, 0, 27],
  [7, 4, 28, 0],
];
niz2 = [
  [1, 2, 1, 0],
  [8, 11, 0, 4],
  [7, 0, 7, 27],
  [0, 4, 28, 14],
];

console.log(niz1);
console.log(niz2);

for (let i = 0; i < niz1.length; i++) {
  const row = niz1[i];
  niz1.pop(niz2[i]);
  red = "";
  for (let j = 0; j < row.length; j++) {
    if (i + j === niz1.length - 1) {
      niz1[i][j] = "\\";
    }
    red += `$({row}[j])-[${i}][${j}] \t`;
  }
  console.log(red);
}
