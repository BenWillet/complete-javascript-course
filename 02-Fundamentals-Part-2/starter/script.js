"use strict";

function logger(x) {
  console.log(x);
}

// Arrow function
const calcAge3 = (birthyear) => 2032 - birthyear;
const age3 = calcAge3(1921);
logger(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Ben"));

// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} applepieces and ${orangePieces} orangepieces`;
  return juice;
}
console.log(fruitProcessor(8, 12));
