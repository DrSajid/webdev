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

// document.addEventListener("keypress", (event) => {
//   let audio = "";
//   if (event.key == "w") {
//     audio = new Audio("./sounds/crash.mp3");
//   } else if (event.key == "a") {
//     audio = new Audio("./sounds/kick-bass.mp3");
//   } else if (event.key == "s") {
//     audio = new Audio("./sounds/snare.mp3");
//   } else if (event.key == "d") {
//     audio = new Audio("./sounds/tom-1.mp3");
//   } else if (event.key == "j") {
//     audio = new Audio("./sounds/tom-2.mp3");
//   } else if (event.key == "k") {
//     audio = new Audio("./sounds/tom-3.mp3");
//   } else if (event.key == "l") {
//     audio = new Audio("./sounds/tom-4.mp3");
//   }
//   audio.play();
// });

function playAudio(audioFile, key) {
  let audio = new Audio(audioFile);
  addAnimButton(key);
  audio.play();
}

document.addEventListener("keypress", (event) => {
  let audio = "";
  switch (event.key) {
    case "w":
      playAudio("./sounds/crash.mp3", event.key);
      break;
    case "a":
      playAudio("./sounds/kick-bass.mp3", event.key);
      break;
    case "s":
      playAudio("./sounds/snare.mp3", event.key);
      break;
    case "d":
      playAudio("./sounds/tom-1.mp3", event.key);
      break;
    case "j":
      playAudio("./sounds/tom-2.mp3", event.key);
      break;
    case "k":
      playAudio("./sounds/tom-3.mp3", event.key);
      break;
    case "l":
      playAudio("./sounds/tom-4.mp3", event.key);
      break;
    default:
      console.log("no audio");
      break;
  }
});

function addAnimButton(key) {
  var test = document.querySelector("." + key);
  test.classList.add("pressed");
  setTimeout(function (key) {
    test.classList.remove("pressed");
  }, 100);
}
