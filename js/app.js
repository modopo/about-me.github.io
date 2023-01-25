'use strict';

const username = prompt('But first! What\'s your name?');

const element = document.getElementById('quiz');
element.addEventListener('click', startQuiz);


function startQuiz() {
  alert(`Welcome ${username}! Here's a quick 5 yes/no quiz~`);

  /*
  validateInput('I worked in ad operations for 8 years') !== 'n' ? console.log("That's incorrect.") : console.log("That's correct!");
  validateInput('I graduated from UW.') !== 'y' ? console.log("That's incorrect.") : console.log("That's correct!");
  validateInput('I have a degree in Physics.') !== 'n' ? console.log("That's incorrect.") : console.log("That's correct!");
  validateInput('My name is Boaty McBoatface.') !== 'n' ? console.log("That's incorrect.") : console.log("That's correct!");
  validateInput('This is statement number 5.') !== 'y' ? console.log("That's incorrect.") : console.log("That's correct!");
*/

  validateInput('I worked in ad operations for 8 years') !== 'n' ? alert('That\'s incorrect.') : alert('That\'s correct!');
  validateInput('I graduated from UW.') !== 'y' ? alert('That\'s incorrect.') : alert('That\'s correct!');
  validateInput('I have a degree in Physics.') !== 'n' ? alert('That\'s incorrect.') : alert('That\'s correct!');
  validateInput('My name is Boaty McBoatface.') !== 'n' ? alert('That\'s incorrect.') : alert('That\'s correct!');
  validateInput('This is statement number 5.') !== 'y' ? alert('That\'s incorrect.') : alert('That\'s correct!');

  alert(`Thanks for taking the quiz ${username}!`);

}

function validateInput(question) {

  let response = prompt(question).toLowerCase();

  while (response !== 'yes' && response !== 'no' && response !== 'y' && response !== 'n') {
    alert('Sorry, that\'s an invalid input. Please respond with Yes/No/Y/N');
    response = prompt(question);
  }

  return response;
}
