// fetch("https://catfact.ninja")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });

// ======================================
// ======================================

// async function getData() {
//   try {
//     const response = await fetch("https://catfact.ninja/facts");
//     const resJson = await response.json();
//     console.log(response);
//   } catch (err) {
//     console.log("PROBLEM SA SERVEROM");
//   }
// }

// getData();

// ======================================
// ======================================

async function getArr() {
  try {
    const res = await fetch("https:jsonplaceholder.typicode.com/users");
    const resBody = await res.json();

    console.log(resBody);
    return resBody.map((u) => {
      return u.name;
    });
  } catch (error) {
    console.log(error);
  }
}

userNames = [];
getArr().then((rBody) => {
  console.log(rBody);
  userNames = rBody;
});
