'use strict';

const FIVE_Q = ['Is the default color for the sky blue?', 'Is Earth flat?', 'Is fire hot?', 'Is this the fourth question?', 'Does 2+2 = 4?'];
const FIVE_Q_SOLUTION = ['y', 'n', 'y', 'y', 'y'];
const RANDOM_NUMBER = Math.floor(Math.random() * 10);

const NUMBER_MAX_GUESS = 4;

const MULTIPLE_CHOICE_ANSWERS = ['blue', 'yellow', 'red', 'orange', 'purple', 'green', 'white', 'black', 'coral', 'beige', 'teal', 'amber'];
const CHOICE_MAX_GUESS = 6;

let score = 0;
let attempt = 0;
let answer;

const USERNAME = prompt('But first! What\'s your name?');

alert(`Welcome ${USERNAME}! Here's a quick game quiz. Please input with a simple yes/no, y/n, a whole number or the provided choices. If you submit nothing, it'll count against you.`);

gameOne();
gameTwo();
gameThree();



//5 guestions
function gameOne() {
  for (let idx = 0; idx < FIVE_Q.length; idx++) {
    answer = prompt(`${FIVE_Q[idx]}`).toLowerCase();

    if (answer === 'yes' || answer === 'no' || answer === 'y' || answer === 'n') {
      if (answer[0] === FIVE_Q_SOLUTION[idx]) {
        alert('That\'s correct!');
        score++;
      } else {
        alert('That\'s incorrect.');
      }
    } else {
      alert('Invalid input. We\'ll have to count that as incorrect. Next question!');
    }
  }
}

//guess the random number
function gameTwo() {
  alert('Let\'s change it up. Guess the number I randomly picked between 0 and 10 inclusive in 4 tries!');

  while (attempt <= NUMBER_MAX_GUESS) {
    answer = Number(prompt('Input a whole number between 0 and 10 inclusive. An empty input will count as 0.'));
    attempt++;

    if (attempt === NUMBER_MAX_GUESS && answer !== RANDOM_NUMBER) {
      alert(`That was the 4th attempt. Unfortunately, the number I chose was ${RANDOM_NUMBER}. Better luck next time!`);
      break;
    }

    if (answer % 1 !== 0 && attempt !== 4) {
      alert(`That's an invalid input. We'll have to count that as an attempt. You have ${NUMBER_MAX_GUESS - attempt} attempts left to guess the number.`);
    } else if (answer === RANDOM_NUMBER) {
      alert(`You got it! The number I chose was ${RANDOM_NUMBER}. You got the right number in ${attempt} guess(es)!`);
      score++;
      break;
    } else if (answer < RANDOM_NUMBER) {
      alert(`Too low. You have ${NUMBER_MAX_GUESS - attempt} attempts left to guess the number.`);
    } else if (answer > RANDOM_NUMBER) {
      alert(`Too high. You have ${NUMBER_MAX_GUESS - attempt} attempts left to guess the number.`);
    }
  }
}

//Pick the right answer
function gameThree() {
  alert('Let\'s change it up again. I\'ll ask a multiple choice question instead. You\'ll get 6 attempts to get it right, but as long as you pick one correctly, then you\'re done!');
  attempt = 0;
  let possibleChoices = '';

  for (let idx = 0; idx < MULTIPLE_CHOICE_ANSWERS.length - 1; idx++) {
    possibleChoices += MULTIPLE_CHOICE_ANSWERS[idx] + ', ';
  }
  possibleChoices += MULTIPLE_CHOICE_ANSWERS[MULTIPLE_CHOICE_ANSWERS.length - 1];

  while (attempt <= CHOICE_MAX_GUESS) {
    answer = prompt('What\'s one of my favorite colors? Here are some choices:' + '\n' + possibleChoices).toLowerCase();
    attempt++;

    console.log(answer);
    let validInput = false;
    for (let idx = 0; idx < MULTIPLE_CHOICE_ANSWERS.length; idx++) {
      if (answer === MULTIPLE_CHOICE_ANSWERS[idx]) {
        validInput = true;
      }
    }

    if (attempt === CHOICE_MAX_GUESS && (answer !== 'black' || answer !== 'blue')) {
      alert('That was the 6th attempt. Unfortunately, my favorite colors were black and blue. Better luck next time!');
      break;
    }

    if (!validInput && attempt !== CHOICE_MAX_GUESS) {
      alert(`That's an invalid input. We'll have to count that as an attempt. You have ${CHOICE_MAX_GUESS - attempt} attempts left to guess the number.`);
    } else if (answer === 'black' || answer === 'blue') {
      alert(`You got it! My favorite colors are black and blue. You got it in ${attempt} guess(es)!`);
      score++;
      break;
    } else {
      alert(`No, ${answer} is not one my favorite colors. You have ${CHOICE_MAX_GUESS - attempt} attempts left to guess.`);
    }
  }
}

alert(`Thanks for taking the game quiz ${USERNAME}! You scored ${score} out of 7 questions asked.`);
