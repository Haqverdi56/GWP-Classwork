// ----------------------------------------------------- TASK 1 -----------------------------------------------------

// function findFirstNotRepeatedChar(str) {
//     var array = str.split('');
//     var result = '';
//     var count = 0;

//     for (var i = 0; i < array.length; i++) {
//       count = 0;

//       for (var y = 0; y < array.length; y++) {
//         if (array[i] === array[y]) {
//           count += 1;
//         }
//       }

//       if (count < 2) {
//         result = array[i];
//         break;
//       }
//     }
//     return result;
//   }
//   console.log(findFirstNotRepeatedChar('abacddbec'));

// ----------------------------------------------------- TASK 2 -----------------------------------------------------

// function charCount(str, letter) {
//     var letterCount = 0;

//     for (var i = 0; i < str.length; i++){
//         if (str.charAt(i).toLowerCase() == letter.toLowerCase()) {
//             letterCount += 1;
//         }
//     }
//     return letterCount;
// }

// console.log(charCount('w3rescource.com', 'c'));

// ----------------------------------------------------- TASK 3 -----------------------------------------------------

// function makeId(length) {
//   let text = "";
//   let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (let i = 0; i < length; i++) {
//     text += charList.charAt(Math.floor(Math.random() * charList.length))
//   }
  
//   return text;
// }
// console.log(makeId(16));

// ----------------------------------------------------- TASK 4 -----------------------------------------------------

// function unique_char(str1) {
//   var str = str1;
//   var uniqueStr = "";

//   for (var x = 0; x < str.length; x++) {
//     if (uniqueStr.indexOf(str.charAt(x)) == -1) {
//       uniqueStr += str[x];
//     }
//   }
//   return uniqueStr;
// }
// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// ----------------------------------------------------- TASK 5 -----------------------------------------------------

// function Arrays_sum(array1, array2) {
//   var result = [];
//   var i = 0;
// //   var x = 0;

// //   if (array1.length === 0) return "array1 is empty";
// //   if (array2.length === 0) return "array2 is empty";

//   while (i < array1.length && i < array2.length) {
//     result.push(array1[i] + array2[i]);
//     i++;
//   }

// //   if (i === array1.length) {
// //     for (x = i; x < array2.length; x++) {
// //       result.push(array2[x]);
// //     }
// //   } else {
// //     for (x = i; x < array1.length; x++) {
// //       result.push(array1[x]);
// //     }
// //   }
//   return result;
// }

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

// ----------------------------------------------------- TASK 6 -----------------------------------------------------

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// for (var i in a) {
//   console.log("row " + i);
//   for (var j in a[i]) {
//     console.log(" " + a[i][j]);
//   }
// }

// ----------------------------------------------------- TASK ? -----------------------------------------------------
//Bubble sort

// function bubble_Sort(a) {
//   var swapp;
//   var n = a.length - 1;
//   var arr = a;

//   while (true) {
//     swapp = false;

//     for (var i = 0; i < n; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var temp = arr[i];

//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;

//         swapp = true;
//       }
//     }
//     if (!swapp) {
//       break;
//     }
//     n--;
//   }
//   return arr;
// }

// console.log(
//   bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );
