const age = 18;

if (age == 18)
    //"18"==18 String 18 ("18") will be converted to number 18
    console.log('You just became a (==loose) adult.');

if (age === 18)
    console.log('You just became a (===strict) adult.');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 9) { // 22 === 23 -> FALSE
    console.log(`cool! ${favourite} is an amazing number.`);
} else if (favourite === 7) {
    console.log(`cool! ${favourite} is an amazing number.`);
} else if (favourite === 1) {
    console.log(`cool! ${favourite} is an amazing number.`);
} else {
    console.log('Number is not 9 or 7 or 1');
}

if (favourite !== 9)
    console.log(`Why not 9?`);