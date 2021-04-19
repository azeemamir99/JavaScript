//type conversion

const inputYear = "1991";
console.log(inputYear + 18);
console.log(typeof inputYear);

const nextYear = "1991";
console.log(Number(nextYear), nextYear);
console.log(Number(nextYear) + 18);
const amir = "myname";
console.log(typeof amir);
console.log(`when you try to convert a string to number it gives NaN, when you check the type of NaN it shows as number, its weird!`)
console.log(Number("amir"));
console.log(typeof NaN);

const amr = 9;
console.log(typeof amr);
console.log(String(amr), amr);

//type coercion

console.log(`+ sign converts numbers to strings and -*/ symbols convert strings to numbers(if they are integers)`);

console.log('I am ' + 36 + ' years old,');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('10' / 2);
console.log("2" > 1);

let n = '1' + 1;
n = n - 1;
console.log(`n='1'-1`);
console.log(`n=n-1`);
console.log(`hence n is`);
console.log(n);

