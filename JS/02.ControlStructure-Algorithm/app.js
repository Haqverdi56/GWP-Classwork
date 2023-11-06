// ... TASK 1 ...
// const number = 23;

// if (number >= 22) {
//     console.log("Nazik geyin");
// } else if (number >= 15) {
//     console.log("Pencək geyin");
// } else {
//     console.log("Qalın geyin");
// }


// ... TASK 2 ...

// IF ELSE VERSION

// const char = prompt("Please type a character: ");
// const char2 = char.toUpperCase();
// console.log(char2);

// if (
//   char2 === "A" ||
//   char2 === "E" ||
//   char2 === "I" ||
//   char2 === "O" ||
//   char2 === "U"
// ) {
//   alert("Sait: " + char);
// } else if (char2 === "B" || char2 === "C" || char2 === "D") {
//   // Buraya diğer ünsüz harfleri eklemelisiniz
//   alert("Samit: " + char);
// } else {
//   alert(
//     "You typed in a digit or some other character: (+, -, *, ...): " + char
//   );
// }



// SWITCH CASE VERSION
// const char = prompt("Please type a character: ");
// const char2 = char.substring(0, 1).toUpperCase();

// switch (char2) {
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     alert("Sait: " + char);
//     break;

//   case "B":
//   case "C":
//   case "D":
//   case "T":
//     // ... all the other consonants
//     alert("Samit: " + char);
//     break;

//   default:
//     alert(
//       "You typed in a digit or some other character: (+, -, *, ...): " + char
//     );
//     break;
// }



// ... TASK 3 ...

// const first = 25;
// const second = 40;
// const thirty = 85;

// if (first >= Second && first >= thirty) {
//   console.log("Max number: " + first);
// } else if (Second >= first && Second >= thirty) {
//   console.log("Max number: " + Second);
// } else {
//   console.log("Max number: " + thirty);
// }



// ... TASK 4 ...

// const examGrade = prompt("Input exam grade:"); // Kullanıcıdan notu alın

// if (examGrade >= 90) {
//   console.log("Exam grade: A");
// } else if (examGrade >= 80) {
//   console.log("Exam grade: B");
// } else if (examGrade >= 70) {
//   console.log("Exam grade: C");
// } else if (examGrade >= 60) {
//   console.log("Exam grade: D");
// } else {
//   console.log("Exam grade: F");
// }




// ... TASK 5 ...

// const userName = prompt("Please type your name: ");
// const len = userName.length;

// if (len <= 5) {
//   alert("Hello " + userName + ". Your have a short name.");
// } else if (len <= 10) {
//   alert("Hello " + userName + ". You have a name with a medium length.");
// } else {
//   alert("Hello " + userName + ". Your name is very long.");
// }
