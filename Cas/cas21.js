// const cars = ["BMW", 123, false, "Volvo", "Saab", 12.5];

// cars.forEach((el, index) => {
//   console.log(el);
//   console.log(index);
// });

// function imeFunkcije(arg1, index) {
//   console.log(arg1);
//   console.log(index);
// }

// function forEachCustom(arr, callbackfn) {
//   for (let i = 0; i < arr.length; i++) {
//     callbackfn(arr[i]);
//   }
// }

// forEachCustom(cars, (arg1, index) => {
//   console.log(arg1);
//   index && console.log(index);
// });

//=================================================================
//=================================================================

function wash(callback) {
  setTimeout(function () {
    console.log("wash");
    callback();
  }, 3000);
}
function dry(callback) {
  setTimeout(function () {
    console.log("dry");
    callback();
  }, 2000);
}
function fold(callback) {
  setTimeout(function () {
    console.log("fold");
    callback();
  }, 1000);
}

function doLaundy(action) {
  action[0](() => {
    action[1](() => {
      action[2](() => {
        console.log("Done");
      });
    });
  });
}

doLaundy([wash, dry, fold]);
