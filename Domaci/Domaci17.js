// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// console.log(student);

// =========================================
// =========================================

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus === true) {
    console.log(
      "You read the " +
        library[i].title +
        " book, writen by " +
        library[i].author
    );
  } else {
    console.log(
      "You didnt read the " +
        library[i].title +
        " book, writen by " +
        library[i].author
    );
  }
  console.log(library[i].readingStatus);

}
