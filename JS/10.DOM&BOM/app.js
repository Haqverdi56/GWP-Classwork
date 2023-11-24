// // TASK 1

// let i = 1;

// let interval = setInterval(() => {
//   console.log(i);
//   i++;
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);

// // TASK 2

let btn = document.querySelector(".btnChange");
let textP = document.querySelector(".textChange");

btn.addEventListener("click", function () {
  textP.innerText = "I am hacker!!!";
  textP.style.fontSize = "50px"
  textP.style.color = "yellow"
});

// // // TASK 3

let divs = document.querySelectorAll(".divs");
console.log(divs);
divs.forEach((el) => {
  console.log(el.innerText);
});

// // TASK 4

let str = "developer";
let index = 0;

let intervalId = setInterval(function () {
  if (index < str.length) {
      let char = str.charAt(index).toLocaleUpperCase();

      str = str.substring(0, index) + char + str.substring(index + 1);

      index++;
    } else {
        clearInterval(intervalId);
    }
}, 1000);

// // TASK 5

let colorBtn = document.querySelector(".changeColorBtn");
let body = document.getElementById("body");

let colors = ["blue", "red", "green", "blueviolet", "dodgerblue", "black"];


colorBtn.addEventListener("keyup", function (e) {
  console.log(e.keyCode);
  body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// PART 2

// setInterval(()=>{
//     body.style.backgroundColor = colors[Math.floor(Math.random() * 6)]
// }, 500)
