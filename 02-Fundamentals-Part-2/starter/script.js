const Ben = [
  "Ben",
  "willet",
  2024 - 1991,
  "developer",
  ["Michael", "Peter", "Steven"],
  true,
  "Godmode ",
];
const types = [];

for (let i = 0; i < Ben.length; i++) {
  console.log(Ben[i], typeof Ben[i]);

  // Filling types array
  // types[i] = typeof Ben[i];
  types.push(typeof Ben[i]);
  console.log(types);
}

const years = [1991, 2007, 1969, 2020];
const ages = []; // 2021 - 1991

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

console.log("REVERSE");

for (let i = Ben.length - 1; i >= 0; i--) {
  console.log(i, Ben[i]);
}

// loop inside a loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----------starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} lifting weight repetition ${rep}`);
//   }
// }

//WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(` WHILE: lifting weight repetition ${rep}`);
  rep++;
}

let randomNumber = Math.trunc(Math.random() * 6) + 1;

while (randomNumber !== 6) {
  console.log(`you rolled a ${randomNumber}!  keep going son!`);
  randomNumber = Math.trunc(Math.random() * 6) + 1;
}
if (randomNumber === 6) {
  console.log("HURRAY you are the rollmaster boi");
}
