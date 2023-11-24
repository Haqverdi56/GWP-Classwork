// TASK 1

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

container.addEventListener("mousemove", function (event) {
  console.log(event.clientX);
  console.log(window.innerWidth);


  if (event.clientX < innerWidth / 2) {
    left.innerText = event.clientX;

    left.style.backgroundColor = "green";
    right.style.backgroundColor = "red";
  } else {
    right.innerText = event.clientX;

    left.style.backgroundColor = "blue";
    right.style.backgroundColor = "green";
  }
});








// TASK 2

var myElement = document.getElementById("myElement");

myElement.addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightgreen";
});

myElement.addEventListener("mouseout", function () {
  this.style.backgroundColor = "seagreen";
});
