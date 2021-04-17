// const iqra = 3.5;
// const isOldEnough = iqra >= 3;

// if (isOldEnough) {
//     console.log('iqra can ride bicycle.');
// } else {
//     console.log('iqra cannot ride bicycle.');
// }


// const khadijah = 2;

// if (khadijah >= 3) {
//     console.log('khadijah can ride bicycle.')
// } else {

//     console.log(`khadijah can't ride bicycle.`);
// }

const age = 2.5;
const isOldEnough = age >= 3;

if (isOldEnough) {
    console.log('Khadijah can ride bicycle.');
} else {
    const yearsLeft = 3 - age;
    console.log(`Khadijah is too young, wait another ${yearsLeft} years for riding bicycle ;-)`);
}

const birthYear = 2019;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);