let bt_w = document.querySelector("button.w");
let bt_a = document.querySelector("button.a");
let bt_s = document.querySelector("button.s");
let bt_d = document.querySelector("button.d");
let bt_j = document.querySelector("button.j");
let bt_k = document.querySelector("button.k");
let bt_l = document.querySelector("button.l");

bt_w.addEventListener("click", () => {
  let audio = new Audio("./sounds/crash.mp3");
  audio.play();
});
bt_l.addEventListener("click", () => {
  let audio = new Audio("./sounds/kick-bass.mp3");
  audio.play();
});
bt_a.addEventListener("click", () => {
  let audio = new Audio("./sounds/snare.mp3");
  audio.play();
});
bt_s.addEventListener("click", () => {
  let audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
});
bt_d.addEventListener("click", () => {
  let audio = new Audio("./sounds/tom-2.mp3");
  audio.play();
});
bt_j.addEventListener("click", () => {
  let audio = new Audio("./sounds/tom-3.mp3");
  audio.play();
});
bt_k.addEventListener("click", () => {
  let audio = new Audio("./sounds/tom-4.mp3");
  audio.play();
});

document.addEventListener("keypress", (event) => {
  let audio = "";
  if (event.key == "w") {
    audio = new Audio("./sounds/crash.mp3");
  } else if (event.key == "a") {
    audio = new Audio("./sounds/kick-bass.mp3");
  } else if (event.key == "s") {
    audio = new Audio("./sounds/snare.mp3");
  } else if (event.key == "d") {
    audio = new Audio("./sounds/tom-1.mp3");
  } else if (event.key == "j") {
    audio = new Audio("./sounds/tom-2.mp3");
  } else if (event.key == "k") {
    audio = new Audio("./sounds/tom-3.mp3");
  } else if (event.key == "l") {
    audio = new Audio("./sounds/tom-4.mp3");
  }
  audio.play();
});
