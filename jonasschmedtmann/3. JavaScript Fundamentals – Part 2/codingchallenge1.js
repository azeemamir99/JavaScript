// const data1DoplhinsAvg = (44 + 23 + 71) / 3;
// console.log(`data 1 Dolphins average is ${data1DoplhinsAvg}`);
// const data1KoalasAvg = (65 + 54 + 49) / 3;
// console.log(`data 1 Koalas average is ${data1KoalasAvg}`);

const calcAverage = (a, b, c) => (a + b + c) / 3;
// test the function console.log(calcAverage(1, 2, 3));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);