// function move(arr, fromIndex, toIndex) {
//   var element = arr[fromIndex];
//   console.log(arr);
//   arr.splice(fromIndex, 1);
//   arr.splice(toIndex, 0, element);
//   console.log(arr);
// }
// move([30, 10, 20, 40, 50], 0, 2);



arr = [30, 10, 20, 40, 50];

el = arr[0]

arr.splice(0, 1)
arr.splice(3, 0, el)

console.log(arr)