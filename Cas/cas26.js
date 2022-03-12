var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

f1 = sum(1);
f2 = f1(2);
f3 = f2(3);
res = f3(4);

console.log(res);
// console.log(sum(1)(2)(3)(4));
