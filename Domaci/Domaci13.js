sort = [33, 0, 76, 5, 1, 0, 6, 1];

function find(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] === 0) {
      niz.splice(i, 1);
      niz.push(0);
    } else if (niz[i] === 1) {
      niz.splice(i, 1);
      niz.unshift(1);
    }
  }
  console.log(niz);
}
find(sort);
