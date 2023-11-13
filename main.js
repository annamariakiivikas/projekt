// Enable ES6 import syntax
require = require('esm')(module /*, options*/);

// Replace './your_actual_main.js' with the correct path to your main module
module.exports = require('./main.js');

// Rest of your code
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Sisestage oma nimi:',
  },
  {
    type: 'confirm',
    name: 'confirmed',
    message: 'Kas soovite jätkata?',
  },
  {
    type: 'list',
    name: 'color',
    message: 'Valige teie lemmikvärv:',
    choices: ['Sinine', 'Punane', 'Roheline', 'Kollane'],
  },
  {
    type: 'checkbox',
    name: 'hobbies',
    message: 'Valige oma hobid:',
    choices: ['Sport', 'Lugemine', 'Reisimine', 'Muusika'],
  },
  {
    type: 'password',
    name: 'password',
    message: 'Sisestage parool:',
    mask: '*',
  },
  {
    type: 'number',
    name: 'age',
    message: 'Kui vana te olete?',
  },
  {
    type: 'input',
    name: 'interestingFact',
    message: 'Kirjutage üks huvitav fakt enda kohta:',
  },
];

inquirer.prompt(questions)
  .then((answers) => {
    console.log('Vastused:', answers);
  })
  .catch((error) => {
    console.error('Viga:', error);
  });
