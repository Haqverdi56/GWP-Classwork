// // ------------------------------------------------------ TASK 1 -------------------------------------------------------

let addBgColor = document.querySelector(".addBgColor");

addBgColor.addEventListener("click", function () {
  addBgColor.parentElement.style.backgroundColor = "teal";
  addBgColor.parentElement.style.width = "200px";
  addBgColor.parentElement.style.height = "200px";
  addBgColor.parentElement.style.position = "relative";

  this.style.position = "absolute";
  this.style.bottom = "20px";
  this.style.right = "20px";
});
// // ------------------------------------------------------ TASK 2 -------------------------------------------------------

const themeToggleBtn = document.querySelector(".theme");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// // ------------------------------------------------------ TASK 3 -------------------------------------------------------
const disableBtn = document.querySelector(".disableBtn")
const imgDiv = document.querySelector(".imgDiv");
const img = document.createElement("img");

img.setAttribute("src", "https://www.planetware.com/wpimages/2020/03/canada-best-lakes-lake-louise.jpg")
imgDiv.append(img);

// // ------------------------------------------------------ TASK 4 -------------------------------------------------------

// let ul = document.querySelector(".list");
// let li = document.querySelectorAll("li");

// ul.style.listStyle = "none";
// let btn = document.createElement("button");

// li.forEach((el) => {
//   el.addEventListener("click", function () {
//     el.setAttribute("hidden", true);
//     // if (this.hidden == true) {
//     //   btn.hidden = false;
//     //   btn.innerText = "Undo";
//     // }
//     ul.append(btn);
//     // btn.addEventListener("click", function () {
//     //   el.hidden = false;
//     //   btn.hidden = true;
//     // });
//   });
// });

// // ------------------------------------------------------ TASK 5 -------------------------------------------------------

const header = document.querySelector("header");

const divHeader = document.createElement("div");
divHeader.className = "header"
divHeader.className = "logo";


const h2 = document.createElement("h2");
h2.innerText = "LOGOBAKERY"

const nav = document.createElement('nav');
const ul = document.createElement('ul');

const button = document.createElement('button');
button.className = "headBtn"
button.innerText = "Contact"

const liArr = ["Services", "Projects", "About"]
liArr.forEach((item) => {
  const liElem=document.createElement("li")
  liElem.innerText=item
  ul.append(liElem)
})

divHeader.append(h2, nav, button)
nav.append(ul)
divHeader.append(h2, nav, button)
header.append(divHeader);

console.log(header);

divHeader.style.display = 'flex'
divHeader.style.justifyContent = 'space-between'




