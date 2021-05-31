const amirArray = [
    'Azeem',
    'Amir',
    2021 - 1987,
    'engineer',
    ['Khalid', 'Wasil', 'Shabaaz'],
    true
];
const types = [];

// console.log(amirArray[0]);
// console.log(amirArray[1]);
//  ...
// console.log(amirArray[4]);

for (let i = 0; i < amirArray.length; i++) {
    // reading from amirArray
    console.log(amirArray[i], typeof amirArray[i]);

    // filling types array
    // types[i] = typeof amirArray[i];
    types.push(typeof amirArray[i]);
}
console.log(types);

const years = [1933, 1957, 1966, 1987, 1990];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);

// continue and break

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < amirArray.length; i++) {
    if (typeof amirArray[i] !== 'string') continue;

    console.log(amirArray[i], typeof amirArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < amirArray.length; i++) {
    if (typeof amirArray[i] === 'number') break;

    console.log(amirArray[i], typeof amirArray[i]);
}