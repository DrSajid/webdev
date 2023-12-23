// $("h1").css("background-color", "yellow");
// $("h1").css("background-color", "blue");
$(document).ready(function () {
  $("h1").css("background-color", "red");
  $("h1").css("color", "white");
  $("h1").css("font-size", "50px");
  $("h1").css("font-family", "Arial");
  $("h1").css("text-align", "center");
  $("h1").css("text-decoration", "underline");
  $("h1").css("padding", "20px");
  $("h1").css("margin", "20px");
});

$(document).ready(function () {
  $("#btn2").text("link");
});

$("#btn2").addClass("bigger");

$("h1").click((event) => {
  $("h1").css("color", "blue");
  console.log(event);
});

$(document).keypress((event) => {
  $("h1").text(event.key);
  // console.log(event);
});

$("h1").on("mouseover", () => {
  $("h1").text("Love you!");
});

$("h1").on("mouseout", () => {
  $("h1").text("Hello!");
});

$("h1").before("<h2> Some thing to consider here is that we can add any thin in live Web</h2>");
$("h1").after("<button> Why you click me!</button> <br/>");

$("#btn3").on("click", () => $("h1").fadeToggle());
$("#btn4").on("click", () => $("h1").slideToggle());

$("#btn5").on("click", () => $("h1").slideUp().slideDown().animate({ opacity: 0.5 }));
