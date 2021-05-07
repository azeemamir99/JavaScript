const hasDriversLicense = true; //A
const hadGoodVision = true; //B

console.log(hasDriversLicense && hadGoodVision);
console.log(hasDriversLicense || hadGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hadGoodVision;

// if (hasDriversLicense && hadGoodVision) {
//     console.log(`Amir is able to drive.`);
// } else {
//     console.log(`Someone else should drive...`);
// }

const isTired = false //c
console.log(hasDriversLicense && hadGoodVision && isTired);

if (hasDriversLicense && hadGoodVision && !isTired) {
    console.log(`Amir is able to drive.`);
} else {
    console.log(`Someone else should drive...`);
}