'use strict';

const username = prompt('But first! What\'s your name?');

alert(`Welcome ${username}! Here's a quick 5 yes/no quiz. Please input with a simple yes/no or y/n.`);

const fiveQ = ['Is the default color for the sky blue?', 'Is Earth flat?', 'Is fire hot?', 'Is this the fourth question?', 'Does 2+2 = 4?'];
const fiveQSolutions = ['y', 'n', 'y', 'y', 'y'];

for (let idx = 0; idx < fiveQ.length; idx++) {
  let answer = prompt(`${fiveQ[idx]}`).toLowerCase();

  if (answer === 'yes' || answer === 'no' || answer === 'y' || answer === 'n') {
    answer[0] === fiveQSolutions[idx] ? alert('That\'s correct!') : alert('That\'s incorrect.');
  } else {
    alert('Invalid input. Next question!');
  }

}

alert(`Thanks for taking the quiz ${username}!`);

