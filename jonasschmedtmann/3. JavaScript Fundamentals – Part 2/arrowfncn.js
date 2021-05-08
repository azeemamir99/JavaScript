'use strict';

// Arrow function

// One parameter code
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1985);
console.log(age3);

// Multiple line code
const yearsUntilRetirement = birthYear2 => {
    const age = 2021 - birthYear2;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1990));

// Multiple parameter code
const yrsUntilRetirement = (birthYear3, firstName) => {
    const currentAge = 2021 - birthYear3;
    const yrsUntilRetirement = 65 - currentAge;
    return `${firstName} retires in ${yrsUntilRetirement} years`;
}

console.log(yrsUntilRetirement(2017, 'Iqra'));
console.log(yrsUntilRetirement(2019, 'Khadijah'));