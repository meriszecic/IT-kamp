function sort(niz) {
  for (let i = 0; i < niz.length; i++) {
    for (let j = 0; j < niz.length; j++) {
      if (niz[i] < niz[j]) {
        let pom = niz[i];
        niz[i] = niz[j];
        niz[j] = pom;
      }
    }
  }
  console.log(niz[niz.length - 1] + niz[niz.length - 2]);
}

console.log(sort([45, 435, 12, 65, 8, 2, 30]));
