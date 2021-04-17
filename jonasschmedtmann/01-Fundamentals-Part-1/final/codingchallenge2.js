const marksWeight1 = 78;
const marksHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;


const data1MarksBMI = marksWeight1 / marksHeight1 ** 2;
const data1JohnBMI = johnWeight1 / johnHeight1 ** 2;

console.log(`From data1 Mark's BMI ${(data1MarksBMI)}`)
console.log(`From data1 John's BMI ${(data1JohnBMI)}`)


const marksWeight2 = 95;
const marksHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const data2MarksBMI = marksWeight2 / marksHeight2 ** 2;
const data2JohnBMI = johnWeight2 / johnHeight2 ** 2;



if (data1MarksBMI > data1JohnBMI) {
    console.log(`BMI of Mark's is higher than John's`)
} else {
    console.log(`BMI of John's is higher than Mark's`)
}




console.log(`From data2 Mark's BMI ${(data2MarksBMI)}`)
console.log(`From data2 John's BMI ${(data2JohnBMI)}`)


if (data2MarksBMI > data2JohnBMI) {
    console.log(`BMI of Mark's is higher than John's`)
} else {
    console.log(`BMI of John's is higher than Mark's`)
}