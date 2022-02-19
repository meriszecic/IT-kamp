const cars = ["BMW", 123, false, "Volvo", "Saab", 12.5];

cars.forEach((el, index) => {
  console.log(el);
  console.log(index);
});

function imeFunkcije(arg1, index) {
  console.log(arg1);
  console.log(index);
}

function forEachCustom(arr, callbackfn) {
  for (let i = 0; i < arr.length; i++) {
    callbackfn(arr[i]);
  }
}

forEachCustom(cars, (arg1, index) => {
  console.log(arg1);
  index && console.log(index);
});


