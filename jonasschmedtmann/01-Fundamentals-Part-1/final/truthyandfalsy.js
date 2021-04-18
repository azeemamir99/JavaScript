console.log(`javascript has 5 falsy values, they are: 0, 'empty string', undefined, null, NaN, ofcourse false is also false.`);
console.log(`everything else are thuthy values, that means everything else the above will be converted to boolean value true when they are converted`);

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('azeem'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Spend it wisely (:-)");
} else {
    console.log("Spend it all ;-)");
}

let height = "OK";
if (height) {
    console.log("height is defined");
} else {
    console.log(`height is not ok`);
}

let weight;
if (weight) {
    console.log('weight is defined');
} else {
    console.log("weight is UNDEFINED");
}