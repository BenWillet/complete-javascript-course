'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH321', 8, 2000);
createBooking('LH8899', 5);

const flightNumber = 'LH123';
const passenger = {
  name: 'Johnson Jackman',
  passportNumber: 82292292,
  securityLevel: 1,
};

const checkIn = function (
  flightNumber,
  passenger,
  passportNumber,
  securityLevel
) {
  flightNumber = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  passenger.passportNumber === 8229229
    ? alert('Checked in')
    : alert('Wrong passport');
};
checkIn(flightNumber, passenger);
console.log(checkIn);
