function fizzBazz(number) {
  let myArray = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      myArray.push("Fizz & Buzz (3 & 5)");
    } else if (i % 3 === 0) {
      myArray.push("Fizz_3 ");
    } else if (i % 5 === 0) {
      myArray.push("Buzz_5 ");
    } else {
      myArray.push(i);
    }
    console.log(myArray[i]);
  }
}

fizzBazz(16);
