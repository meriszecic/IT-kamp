function iceBrickVolume(radius, bottleLength, rimLength) {
  if (radius > 0 && bottleLength > 0 && rimLength < bottleLength) {
    duzina = bottleLength - rimLength;
    a = duzina * 2;
    console.log(a * radius ** 2);
  } else {
    return console.log("Neispunjava uslove");
  }
}

rez = iceBrickVolume(10, 25, 20);
console.log(rez);
console.log(iceBrickVolume(10, 30, 10));
console.log(iceBrickVolume(5, 8, 3));
