const now = 2021;
const ageiqra = now - 2017;
const agekhadijah = now - 2019;

console.log(ageiqra > agekhadijah);

// mdn operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(25 - 10 - 5);

let x, y;
x = y = 10 - 3 - 2;
// 10-3-2 left to right
//x=y=10 right to left
console.log(x, y);

const averageAge = ageiqra + agekhadijah / 2;
console.log(ageiqra, agekhadijah, averageAge);

const averageAgebygrouping = (ageiqra + agekhadijah) / 2;
console.log(ageiqra, agekhadijah, averageAgebygrouping);