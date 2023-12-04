document.querySelector("h1").innerHTML = "Good Job Sajid";

// document.querySelector("p").classList.remove("font_bigger");
// document.querySelector("p").classList.add("font_medium");
document.querySelector("p").classList.add("font_bigger");

document.querySelector("p").innerText = "Updated text";

console.log(document.querySelector("ul a").attributes);
console.log(document.querySelector("ul a").getAttribute("href"));
document.querySelector("ul a").setAttribute("href", "https://www.bing.com");
