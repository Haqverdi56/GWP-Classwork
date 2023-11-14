// -------------------------------------------- TASK 1 --------------------------------------------
// const text = "Java is awesome. Java is fun."
// let newText = text.replaceAll("Java", "JavaScript");

// console.log(newText); //JavaScript is awesome. Javascript is fun.

// -------------------------------------------- TASK 2 --------------------------------------------

// function mixUp(a, b) {
//   return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
// }
// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// -------------------------------------------- TASK 3 --------------------------------------------

// function verbing(word) {
//   if (word.length < 3) return word;
//   if (word.slice(-3) == "ing") {
//     return word + "ly";
//   } else {
//     return word + "ing";
//   }
// }
// console.log(verbing('go'));
// console.log(verbing('swim'));
// console.log(verbing('swiming'));

// -------------------------------------------- TASK 4 --------------------------------------------

// function isPalindrome(string) {
//     if (string == string.split("").reverse().join("")) {
//         console.log('palindrome');
//     } else {
//         console.log("is not palindrome")
//     }
// }
// isPalindrome("radar");

// -------------------------------------------- TASK 5 --------------------------------------------

function splitIntoChunk(arr, length) {
  let tempArray = [];

  for (i = 0; i < arr.length; i += length) {
    tempArray.push(arr.slice(i, i + length));
  }
  return tempArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 43, 435, 45];
// const length = 4;

console.log(splitIntoChunk(array, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

// -------------------------------------------- TASK 6 --------------------------------------------

// function longestWord(sentence) {
//     let words = sentence.split(" ");

//     let longWord = words.reduce((acc, curr) => curr.length > acc.length ? curr : acc, "");

//     return longWord;
// }

// console.log(longestWord("Hello word hi programmers"));

// -------------------------------------------- TASK 7 --------------------------------------------

// function getFileExtension(filename){
//   const extension = filename.split('.').pop();
//   // const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);  // version substring
//   return extension;
// }

// console.log(getFileExtension('module.js'));
// console.log(getFileExtension('module.txt'));
