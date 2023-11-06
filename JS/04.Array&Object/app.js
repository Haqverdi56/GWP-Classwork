// TASK 1

const numbers = [12, 45, 6, 78, 34, 99, 23];
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
  else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log(largest);
console.log(smallest);

// TASK 2

// const numbers = [12, 45, 6, 78, 34, 99, 23];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// console.log("total: " + total);


// TASK 3


// const elements = [1, 2, 3, 4, 5];

// const temp = elements[2]; 
// elements[2] = elements[3];
// elements[3] = temp;

// console.log("Array: " + elements);


// TASK 4

// const numbers = [12, -5, 6, -3, 34, -1, 23];
// const positiveNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     positiveNumbers.push(numbers[i]);
//   }
// }

// console.log("Müsbət ədədlər: " + positiveNumbers);


// TASK 5 

// const originalArray = [1, 2, 3, 4];
// const repeatedArray = [];
// const n = 3;

// for (let i = 0; i < originalArray.length; i++) {
//   for (let j = 0; j < n; j++) {
//     repeatedArray.push(originalArray[i]);
//   }
// }

// console.log("Repeated array: " + repeatedArray);


// TASK 6

// const numbers = [12, 45, 6, 78, 34, 99, 23];
// const evenNumbers = [];
// const oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   } else {
//     oddNumbers.push(numbers[i]);
//   }
// }

// console.log("Cüt rəqəmlər: " + evenNumbers);
// console.log("Tək rəqəmlər: " + oddNumbers);


// TASK 7

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = [];

// for (let i = originalArray.length - 1; i >= 0; i--) {
//   reversedArray.push(originalArray[i]);
// }

// console.log("Reversed array: " + reversedArray);


// TASK 8 

// const students = [
//     {
//         name: "Sharifa",
//         surname: "Aliyeva",
//         studentNumber: "12345",
//         grades: [85, 75, 92]
//     },
//     {
//         name: "Ramida",
//         surname: "Muradova",
//         studentNumber: "67890",
//         grades: [72, 88, 58]
//     }
// ];

// for (let i = 0; i < students.length; i++) {
    // const student = students[i];
    // console.log("Tələbə adı: " + student.name);
    // console.log("Tələbə Soyadı: " + student.surname);
    // console.log("Tələbə Nömrəsi: " + student.studentNumber);
    // console.log("Qiymətləri: " + student.grades.join(", "));
// }





// TASK 

// const numbers = [12, 45, 6, 78, 34, 99, 23];



