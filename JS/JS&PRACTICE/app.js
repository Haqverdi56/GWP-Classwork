// ------------------------------------------------------- TASK 1 -------------------------------------------------------

var number = 224112;

function reverse(num) {
  // console.log("Number", typeof String(num));
  
  var result = String(num).split("").reverse().join("");
  
  return result; // 211422
}

console.log(reverse(number));

// ------------------------------------------------------- TASK 2 -------------------------------------------------------

function letterOrder(str) {
  return str.split("").sort().join("");
}

// ------------------------------------------------------- TASK 3 -------------------------------------------------------

// function uppercase(str) {
//   var array1 = str.split(" ");
//   var newarray1 = [];

//   for (var i = 0; i < array1.length; i++) {
//     newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//   }
//   return newarray1.join(" ");
// }
// console.log(uppercase("the quick brown fox"));

// ------------------------------------------------------- TASK 4 -------------------------------------------------------

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   city: "Ganja",
//   website: "code.edu.az",
//   languageInfo: {
//     eng: "Advance",
//     aze: "Fluenty",
//     rus: "Intermediate",
//   },
// };

// const {firstName, languageInfo:{eng, rus}, ...otherInfo} = person;

// console.log(eng); // "Advance"
// console.log(otherInfo); // { lastName: 'Doe', city: 'Ganja', website: 'code.edu.az' }

// ------------------------------------------------------- TASK 5 -------------------------------------------------------

// let users = [
//   {
//     name: "John Doe",
//     email: "john@example.com",
//     city: "Ganja",
//     country: "Azerbaijan",
//   },
//   {
//     name: "Jane Smith",
//     email: "jane@example.com",
//     city: "Paris",
//     country: "France",
//   },
//   {
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     city: "Sydney",
//     country: "Australia",
//   },
//   {
//     name: "Alice Lee",
//     email: "alice@example.com",
//     city: "Tokyo",
//     country: "Japan",
//   },
// ];

// console.log(
//   users.map((user) => {
//     return { ...user, country: user.country.slice(0, 3).toLocaleUpperCase() };
//   })
// );

// ------------------------------------------------------- TASK 6 -------------------------------------------------------

// const users = [
//   {
//     firstName: "Mike",
//     lastName: "Sheridan",
//   },
//   {
//     firstName: "Tim",
//     lastName: "Lee",
//   },
//   {
//     firstName: "John",
//     lastName: "Carte",
//   },
// ];

// console.log(users.map((el) => `${el.firstName} ${el.lastName}`));

// ------------------------------------------------------- TASK 7 -------------------------------------------------------
// let a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// for (let i in a) {
//   console.log("row " + i);
//   for (let j in a[i]) {
//     console.log( a[i][j]);
//   }
// }


let str = "sema";

console.log(str.split("").sort())