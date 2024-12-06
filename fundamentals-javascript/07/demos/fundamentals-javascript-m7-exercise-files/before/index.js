// Import Sample Data
import employees from './data.json' assert { type: 'json' }

import createPrompt from 'prompt-sync';
let prompt = createPrompt();

function getInput(promptText,validator, transformer) {
  let value = prompt(promptText);
  if (validator && !validator(value)) {
    console.error(`--Invalid input`);
    process.exit(1);
  }
  if(tramsformer) {
    return(transformer.value);
  }
  return value;
}

//Validator function--------------------------------------------

const isStringInputValid = function(input) {
  return (input) ? true : false;
}

const isBooleanInputValid = function(input) {
  return (input === 'yes' || input === 'no');
}

const isStartYearValid = function(input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2024) {
    return false;
  }
  return true;
}

const isStartMonthValid = function(input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
    return false;
  }
  return true;
}

const isStartDayValid = function(input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
    return false;
  }
  return true;
}

// Aplication commands ---------------------------------------------------
function ListEmployees() {
  console.log(`Employee List ________________________________`);
  console.log('');

  for (let emp of employees) {
    for (let propery in emp) {
      console.log(`${property}: ${emp[property]}`); 
    }
    console.log('');
    prompt('Press enter to continue...');
  }
  console.log(`Employee List completed`);
}

function AddEmployee() {
  console.log(`Add Employee -----------------------------`);
  console.log('');
  let employee = {};
  employee.firstName = getInput("First Name: ", isStringInputValid);
  employee.lastName = getInput("LastName; ", isStringInputValid);
  let startDateYear = getInput("Employee Start Year (1990 - 2024): ", isStartYearValid);
  let startDateMonth = getInput("Employee Start Month (1-12): ", isStartMonthValid);
  let startDateDay = getInput("Employee Start Day (1-31): ", isStartDayValid);
  employee.startDate =  new Date(startDateYear, startDateMonth -1, startDateDay);
  employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => (i === 'yes'));

  // Output Employee JSON
  const json = JSON.stringify(employee, null, 2);
  console.log(`Employee: ${json}`);
}

//Aplication execution ---------------------------------------------------


// Get the command the user wants to exexcute
const command = process.argv[2].toLowerCase();

switch (command) {

  case 'list':
    ListEmployees();
    break;

  case 'add':
    AddEmployee();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);

}



