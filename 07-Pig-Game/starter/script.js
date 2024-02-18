'use strict';
// Selecting the score elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//select dice
const diceEl = document.querySelector('dice');
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
