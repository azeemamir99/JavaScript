const amirArray = [
    'Azeem',
    'Amir',
    2021 - 1987,
    'engineer',
    ['Khalid', 'Wasil', 'Shabaaz'],
    true
];

for (i = amirArray.length - 1; i >= 0; i--) {
    console.log(i, amirArray[i], typeof amirArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}