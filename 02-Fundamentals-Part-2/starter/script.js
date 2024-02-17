"use strict";

function logger(x) {
  console.log(x);
}

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 11);
logger(appleJuice);
