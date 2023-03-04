const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");

let numContainer = document.getElementById("num");
let value = 0;
let btnReset = document.querySelector("btn2");

//imagenes
const openMouthImg = "./images/open.png";
const closeMouthImg = "./images/close.png";

//audio
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

//desktop
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

//contador
document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", function () {
    value++;
    numContainer.textContent = value;

    if (value % 50 === 0) {
      jsConfetti.addConfetti({
        emojis: ["😺", "😸", "😹", "😻", "😼", "😽"],
      });
    }
  });
  btn.addEventListener("touchend", function () {
    value++;
    numContainer.textContent = value;

    if (value % 50 === 0) {
      jsConfetti.addConfetti({
        emojis: ["😺", "😸", "😹", "😻", "😼", "😽"],
      });
    }
  });
  document.querySelector("#btn2").addEventListener("click", function () {
    value = 0;
    numContainer.textContent = value;
  });
});

//touchscreens
btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  openMouth();
});

btn.addEventListener("touchmove", function (e) {
  e.preventDefault();
  openMouth();
});

btn.addEventListener("touchend", function (e) {
  e.preventDefault();
  closeMouth();
});

//funciones

function openMouth() {
  popcat.src = openMouthImg;
  openMouthSound.play();
}

function closeMouth() {
  popcat.src = closeMouthImg;
  closeMouthSound.play();
}

//confetti y emojis

const jsConfetti = new JSConfetti();

document.querySelector("#congrats");
