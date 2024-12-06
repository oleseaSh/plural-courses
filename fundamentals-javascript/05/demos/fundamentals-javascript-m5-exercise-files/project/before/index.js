import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt('First Name: ');
if(!firstName) {
    console.error('Invalid first Name');
    process.exit(1);
}
employee.firstName = firstName;

let lastName = prompt('Last name: ');
if (!lastName) {
    console.error('Invalid last Name');
    process.exit(1);
}
employee.lastName = lastName;

let startDateYear = prompt('Employee start year (1990-2024):');
startDateYear = Number(startDateYear);
if (!Number.isInteger(startDateYear)) {
    console.error('Enter a valid start date year');
    process.exit(1);
}
if(startDateYear < 1990 || startDateYear > 2024) {
    console.error('Enter a start date year within the correct range');
    process.exit(1);
}

let startDateMonth = prompt('Employee start date month (1-12):');
startDateMonth = Number(startDateMonth);
if (!Number.isInteger(startDateMonth)) {
    console.erroe('Enter the valid start month');
    process.exit(1);
}
if (startDateMonth < 1 || startDateMonth > 12 ) {
    console.error('Enter the start month within the valid range');
    process.exit(1);
}

let startDateDay = prompt('Employee start date day (1-31):');
startDateDay = Number(startDateDay);
if (!Number.isInteger(startDateDay)) {
    console.erroe('Enter the valid start day');
    process.exit(1);
}
if (startDateDay < 1 || startDateMonth > 31 ) {
    console.error('Enter the start day within the valid range');
    process.exit(1);
}

employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt('Is employee active (yes or no) ');
if ( isActive !== 'yes' && isAstive !=='no') {
    console.error('Enter yes or not value for emp;loyee active status');
    process.exit(1);
}
employee.isActive = (isActive === 'yes');

const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);


