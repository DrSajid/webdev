var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//condition verification
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Challenger 1 Wins! hehe 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Challenger 2 Wins! haha 🚩";
} else {
  document.querySelector("h1").innerHTML = "Oh the Game is Draw,    Try Again!";
}
