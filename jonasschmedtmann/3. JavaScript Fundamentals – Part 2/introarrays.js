const friend1 = 'khalid';
const friend2 = 'wasil';
const friend3 = 'shabaaz';

const friends = ['khalid', 'wasil', 'shabaaz'];
console.log(friends);

const yrs = new Array(1985, 1986, 1987, 1988);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'javeed';
console.log(friends);
// friends = ['naveed', 'talib'];

const firstName = 'azeem'
const azeem = [firstName, 'amir', 2021 - 1987, 'teacher', friends];
console.log(azeem);

//Exercise
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const years = [1985, 1986, 1987, 1988, 2000];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);