const firstName = 'azeem';
const job = 'developer';
const birthYear = '1985';
const year = '2021';

const amir = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(amir);

const amirNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(amirNew);

console.log(`Just a regular string example using back-tick...`);

console.log('string with \n\
multiple \n\
lines before es6');

console.log(`but now with 
back-tick we just hit enter
 and enter multiple lines in js template literals.`);