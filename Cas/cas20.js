const data = { a: 1, b: 2 };
console.log(Object.entries(data));

//===============================================
//===============================================

function myfunction(data, prop) {
  delete data[prop];
  return data;
}

console.log(myfunction({ a: 1, b: 2 }, "b"));

//===============================================
//===============================================

var library = [
  {
    age: 14,
  },
  {
    age: 18,
  },
  {
    age: 12,
  },
  {
    age: 20,
  },
  {
    age: 13,
  },
  {
    age: 25,
  },
];

function arrayobjecata(obj) {
  tacno = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].age >= 18) {
      tacno.push(obj[i]);
    }
  }
  return tacno;
}

console.log(arrayobjecata(library));

//===============================================
//===============================================
