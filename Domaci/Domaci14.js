function powersOfTwo(n) {
    pomArr =[]
    for (let i = 0; i <= n; i++) {
        pomArr.push(2 ** i)
    }
    return  pomArr;
}
rez = powersOfTwo(5)
rez1 = powersOfTwo(2)
rez2 = powersOfTwo(10)

console.log(rez);
console.log(rez1);
console.log(rez2);

