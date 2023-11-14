// -------------------------------------------------  TASK 1  -------------------------------------------------

// const number = [1, 2, 3, 4, 5, 6, 7, 8];

// const oddNumbers = number.filter(num => num % 2 === 1);
// console.log(oddNumbers); // [1, 3, 5, 7]

// // part II

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(array.filter(num => num > 0 && num <= 10));

/*Would return (10) [1,2,3,4,5,6,7,8,9,10]*/

// -------------------------------------------------  TASK 2  -------------------------------------------------

// const users = [
//     {
//       first_name: 'Mike',
//       last_name: 'Sheridan'
//     },
//     {
//       first_name: 'Tim',
//       last_name: 'Lee'
//     },
//     {
//       first_name: 'John',
//       last_name: 'Carte'
//     }
//   ];

//   const usersList = users.map((user, i) => {
//     console.log(i);
//     return `${user.first_name} ${user.last_name}`;
//   });

//   console.log(usersList); // ["Mike Sheridan", "Tim Lee", "John Carte"]

// -------------------------------------------------  TASK 3  -------------------------------------------------

// const persons = [
//     { name: "Akif", age: 27 },
//     { name: "Aysu", age: 32 },
//     { name: "Ali", age: 35 }
// ];

// const firstPerson = persons.find((person, i) => {
//     console.log(i);
//     return person.age > 30
// });
// console.log(firstPerson);

// -------------------------------------------------  TASK 4  -------------------------------------------------

// const array1 = [1, 4, 9, 16];

// const map1 = array1.map(x => x ** 2);

// console.log(map1);

// -------------------------------------------------  TASK 5  -------------------------------------------------

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// -------------------------------------------------  TASK 6  -------------------------------------------------

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');

// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// -------------------------------------------------  TASK 7  -------------------------------------------------

// const company = [
//   { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
//   { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
//   { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
//   { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
// ];

// const output = company.map((person) => {
//   let result = `${person.firstName} ${person.lastName} illik ${person.salary}$ maaş alır və ${person.yearsWorked} ildir çalışır`;
//   return result;
// });

// console.log(output);

