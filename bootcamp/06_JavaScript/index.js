var a = 3;
var b = 8;
console.log(a);
console.log(b);

var c = a;
a = b;
b = c;

console.log(a);
console.log(b);

function dogAge_to_human(age) {
  dogAge = age; //console.("What is the dog age?");
  humanAge = (dogAge - 2) * 4 + 21;
  console.log("if the doge is " + age + " then its eqvalent to Human Age of " + humanAge);
}

dogAge_to_human(10);
