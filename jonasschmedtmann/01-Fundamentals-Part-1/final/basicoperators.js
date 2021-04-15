// maths operators
const ageazeem = 2021 - 1985;
console.log(ageazeem);

const ageiqra = 2021 - 2017;
const agekhadijah = 2021 - 2019;
console.log(ageiqra, agekhadijah);

const now = 2021;
const yobiqra = 2017;
const yobkhadijah = 2019;
console.log(now - yobiqra, now - yobkhadijah);

console.log(ageiqra * 2, agekhadijah / 10, 2 ** 3);
// 2**3 means 2 to the power of 3, 2*2*2

const firstName = "abdulazeem";
const lastName = "muhammad";
console.log(firstName + " " + lastName);

// assignment operators
let x = 2 + 3;
console.log(x);

let a = 12.5 * 2;
a *= 4; //from above we have a=25, a=a*4 that is a=25*4=100
a++;//a=a+1
a--;//a=a-1
a--;//a=a-1
console.log(a);

// comaparision operators
console.log(ageiqra > agekhadijah);
console.log(agekhadijah > ageazeem);
console.log(agekhadijah >= 18);
console.log(ageazeem >= 18);

const isFullAge = ageazeem >= 18;

console.log(now - 1985 > now - 2017);
console.log(now - ageazeem > now - agekhadijah);
console.log(now - ageazeem < now - ageiqra);