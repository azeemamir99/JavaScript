// console.log(`Data 1`);
const dodt1 = 96;
const dodt2 = 108;
const dodt3 = 89;
console.log(`Dophins ${dodt1},${dodt2},${dodt3}`);
const DoD1 = (dodt1 + dodt2 + dodt3) / 3;

const kodt1 = 88;
const kodt2 = 91;
const kodt3 = 110;
console.log(`Koalas ${kodt1},${kodt2},${kodt3}`);
const KoD1 = (kodt1 + kodt2 + kodt3) / 3;

console.log(`from data1, the average score of Dolphins is ${DoD1}`);
console.log(`from data1, the average score of Koalas is ${KoD1}`);

// const D1Winner = DoD1 > KoD1;

if (DoD1 > KoD1) {
    console.log(`Dolphins win the trophy.`);
} else if (DoD1 < KoD1) {
    console.log(`Koalas win the trophy.`);
} else if (DoD1 === KoD1) {
    console.log(`Both teams win the trophy.`);
}

console.log(`Data Bonus 1`);
const dodb11 = 97;
const dodb12 = 112;
const dodb13 = 101;
console.log(`Dolphins ${dodb11},${dodb12},${dodb13}`);
const DoDB1 = (dodb11 + dodb12 + dodb13) / 3;

const kodb11 = 109;
const kodb12 = 95;
const kodb13 = 123;
console.log(`Koalas ${kodb11},${kodb12},${kodb13}`);
const KoDB1 = (kodb11 + kodb12 + kodb13) / 3;

console.log(`from Data Bonus1, the average score of Dolphins is ${DoDB1}`);
console.log(`from Data Bonus1, the average score of Koalas is ${KoDB1}`);

// const DB1Winner = DoDB1 > KoDB1;

if (DoDB1 > KoDB1 && DoDB1 >= 100) {
    console.log(`Dolphins win the trophy.`);
} else if (DoDB1 < KoDB1 && KoDB1 >= 100) {
    console.log(`Koalas win the trophy.`);
} else if (DoDB1 === KoDB1) {
    console.log(`Both teams win the trophy.`)
}



console.log(`Data Bonus 2`);
const dodb21 = 97;
const dodb22 = 112;
const dodb23 = 101;
console.log(`Dolphins ${dodb21},${dodb22},${dodb23}`);
const DoDB2 = (dodb21 + dodb22 + dodb23) / 3;

const kodb21 = 109;
const kodb22 = 95;
const kodb23 = 106;
console.log(`Koalas ${kodb21},${kodb22},${kodb23}`);
const KoDB2 = (kodb21 + kodb22 + kodb23) / 3;

console.log(`from Data Bonus2, the average score of Dolphins is ${DoDB2}`);
console.log(`from Data Bonus2, the average score of Koalas is ${KoDB2}`);

if (DoDB2 > KoDB2 && DoDB2 >= 100) {
    console.log(`Dolphins win the trophy.`);
} else if (DoDB2 < KoDB2 && KoDB2 >= 100) {
    console.log(`Koalas win the trophy.`);
} else if (DoDB2 === KoDB2 && DoDB2 >= 100 && KoDB2 >= 100) {
    console.log(`Both teams win the trophy.`);
} else if (DoDB2 < 100 && KoDB2 < 100) {
    console.log(`neither teams win the trophy!!!`);
}


console.log(`Data Bonus Self (s)`);
const sdodb21 = 77;
const sdodb22 = 112;
const sdodb23 = 101;
console.log(`Dolphins ${sdodb21},${sdodb22},${sdodb23}`);
const sDoDB2 = (sdodb21 + sdodb22 + sdodb23) / 3;

const skodb21 = 89;
const skodb22 = 95;
const skodb23 = 106;
console.log(`Koalas ${skodb21},${skodb22},${skodb23}`);
const sKoDB2 = (skodb21 + skodb22 + skodb23) / 3;

console.log(`from Data Bonus Self s, the average score of Dolphins is ${sDoDB2}`);
console.log(`from Data Bonus Self s, the average score of Koalas is ${sKoDB2}`);

if (sDoDB2 > sKoDB2 && sDoDB2 >= 100) {
    console.log(`Dolphins win the trophy.`);
} else if (sDoDB2 < sKoDB2 && sKoDB2 >= 100) {
    console.log(`Koalas win the trophy.`);
} else if (sDoDB2 === sKoDB2 && sDoDB2 >= 100 && sKoDB2 >= 100) {
    console.log(`Both teams win the trophy.`);
} else if (sDoDB2 < 100 && sKoDB2 < 100) {
    console.log(`neither teams win the trophy!!!`);
}










// // const DoDB2T = DoDB2 > 100;
// // console.log(DoDB2T);

// // const KoDB2T = KoDB2 > 100;
// // console.log(KoDB2T);

// if (DoDB2T > KoDB2T) {
//     console.log(`Dolphins are the Winners!`);
// } else if (DoDB2T < KoDB2T) {
//     console.log(`Koalas are the Winners!`);
// } else {
//     console.log(`Since both teams have scores above 100 and equal average scores, neither teams win the trophy!!!`);
// }

// if ((DoDB2 > 100) &&> KoDB2) {
//     console.log(`Dolphins are winners.`);
// } else {
//     console.log(`Koalas are winners`);
// }