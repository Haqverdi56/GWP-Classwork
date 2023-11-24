const container = document.querySelector(".container");
const listOne = document.querySelector(".list.one");
const listTwo = document.querySelector(".list.two");
const words = document.querySelector(".words");

const keys = document.querySelectorAll(".key");


window.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (words.innerText.length > 60) {
    words.innerText = "";
  }

  if (e.code == "Space") {
    words.textContent += e.key;
  }

  keys.forEach((item, i) => {
    if (item.textContent == e.key) {
      item.style.opacity = "0";
      item.style.backgroundColor = "#06c06f";
      item.style.transform = `scale(1.3)`;
      item.style.transition = `150ms`;
      words.textContent += `${item.innerText}`;
    }
  });
});

window.addEventListener("keyup", function (e) {
  e.preventDefault();

  // if (e.code == "Space") {
  //   words.textContent += e.key;
  // }

  keys.forEach((item, i) => {
    if (item.textContent == e.key) {
      item.style.opacity = "1";
      item.style.backgroundColor = "darkcyan";
      item.style.transform = `scale(1)`;
    }
  });
});

let a = "a\tb";
let b = "cd";

console.log(a);
console.log(a + b);
