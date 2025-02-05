'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH321', 8, 2000);
// createBooking('LH8899', 5);

// const flightNumber = 'LH123';
// const passenger = {
//   name: 'Johnson Jackman',
//   passportNumber: 82292292,
//   securityLevel: 1,
// };

// const checkIn = function (
//   flightNumber,
//   passenger,
//   passportNumber,
//   securityLevel
// ) {
//   flightNumber = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   passenger.passportNumber === 8229229
//     ? alert('Checked in')
//     : alert('Wrong passport');
// };
// checkIn(flightNumber, passenger);
// console.log(checkIn);
// const greet = greeting => name => {
//   console.log(`${greeting}${name}`);
// };
// const greeterHey = greet('hey ');
// greeterHey('Ben');

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const button = document.querySelector('.poll');
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = prompt(`${this.question}
    ${this.options[0]}
    ${this.options[1]}
    ${this.options[2]}
    ${this.options[3]}
    (Write option number)`);
    return insertAnswer(answer);
  },
};
const insertAnswer = answer => {
  if (!answer) {
    console.log('Error, no input found');
  } else if (answer === '0') {
    poll.answers[0]++;
  } else if (answer === '1') {
    poll.answers[1]++;
  } else if (answer === '2') {
    poll.answers[2]++;
  } else if (answer === '3') {
    poll.answers[3]++;
  } else {
    console.log('Error, not a valid number');
  }
  displayResults(poll.answers);
};

button.addEventListener('click', function () {
  poll.registerNewAnswer();
});

const displayResults = type => {
  console.log(type);
};
