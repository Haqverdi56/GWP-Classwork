const container = document.querySelector(".container");
const listOne = document.querySelector(".list.one");
const listTwo = document.querySelector(".list.two");
const words = document.querySelector(".words");
const space = document.querySelector(".key.space");

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  // console.log(e);

  if (e.getModifierState("CapsLock")) {
    e.uppercaseKey = e.key.toUpperCase();
    keys.forEach(item => {
      if (item.textContent.toLocaleUpperCase() == e.uppercaseKey && e.shiftKey != true) {
        item.style.opacity = "0";
        item.style.backgroundColor = "#06c06f";
        item.style.transform = "scale(1.3)";
        item.style.transition = "150ms";
        words.textContent += `${item.innerText.toLocaleUpperCase()}`;
      }
    });
  }
  if (words.innerText.length > 60) {
    words.innerText = "";
  }

  keys.forEach((item) => {
    if (item.textContent == e.key && e.shiftKey != true) {
      item.style.opacity = "0";
      item.style.backgroundColor = "#06c06f";
      item.style.transform = "scale(1.3)";
      item.style.transition = "150ms";
      words.textContent += `${item.innerText}`;
    }
  });

  if (e.code == "Space") {
    words.textContent += " ";
    space.style.opacity = "0";
    space.style.backgroundColor = "#06c06f";
    space.style.transform = "scale(1.3)";
    space.style.transition = "150ms";
  } else if (e.code == "Backspace") {
    if (e.ctrlKey == true) {
      words.innerText = words.innerText.split(" ").slice(0, -1).join(" ");
    } else {
      words.textContent = words.textContent.slice(0, -1);
    }
  } else if (e.shiftKey == true) {
    if (e.key != "Shift") {
      words.textContent += e.key.toLocaleUpperCase();
    }
  } else if (e.key == "." || e.key == ",") {
    words.textContent += e.key;
  }
});


window.addEventListener("keyup", function (e) {
  keys.forEach((item) => {
    if (
      item.textContent == e.key ||
      item.textContent.toLocaleUpperCase() == e.key.toLocaleUpperCase()
    ) {
      item.style.opacity = "1";
      item.style.backgroundColor = "darkcyan";
      item.style.transform = `scale(1)`;
    }
  });

  if (e.code == "Space") {
    space.style.opacity = "1";
    space.style.backgroundColor = "darkcyan";
    space.style.transform = "scale(1)";
  }
});
