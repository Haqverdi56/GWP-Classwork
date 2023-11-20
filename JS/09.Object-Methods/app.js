//-------------------------------------------------------- TASK 1 --------------------------------------------------------

const employees = {
    secretary: 'Pams',
	sales: 'Jim',
	boss: 'Michael',
	accountant: 'Oscar',
	accountan: ["kmnjjn", "klkkmmk","klkkmmk","klkkmmk","klkkmmk","klkkmmk","klkkmmk","klkkmmk","klkkmmk","klkkmmk","klkkmmk",],
};

// const keys = Object.keys(employees);
const values = Object.values(employees);
// const entries = Object.entries(employees);

// console.log(keys);
// console.log(entries);

//5. Ən uzun length
let max = '';
for (let i = 0; i < values.length; i++) {
    
    if (typeof values[i] == 'string' &&values[i].length > max.length) {
        max = values[i]
    }
}
console.log(max);

//-------------------------------------------------------- TASK 2 --------------------------------------------------------

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     title: "Suzanne Collins",
//     author: "Mockingjay: The Final Book",
//     readingStatus: false,
//   },
// ];

// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";

//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// }

//-------------------------------------------------------- TASK 3 --------------------------------------------------------

// let employee = {
//     name: 'Alice',
//     jobTitle: 'Software Engineer',
//     salary: 75000,

//     promote: function(newTitle, newSalary) {
//         this.jobTitle = newTitle;
//         this.salary = newSalary;
//       console.log('Promotion: ' + this.name + ' is now ' + this.jobTitle + ' with a salary of $' + this.salary);
//     }
//   };

//   employee.promote('Senior Software Engineer', 90000);

//-------------------------------------------------------- TASK 4 --------------------------------------------------------

// const person = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// const character = Object.assign({...person, ...details});

// console.log(character);

//-------------------------------------------------------- TASK 5 --------------------------------------------------------

// let ladder = {
//   step: 0,
//   up: function () {
//     return this.step += 1;
//   },
//   down: function () {
//     return this.step -= 1;
//   }
// };

// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.up());