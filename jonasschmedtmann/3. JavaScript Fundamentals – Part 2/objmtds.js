const abdul = {
    firstName: 'Azeem',
    lastName: 'Amir',
    birthYear: 1987,
    job: 'engineer', // string value
    friends: ['Khalid', 'Wasil', 'Shabaaz'], //array value
    hasDriversLicense: true, // boolean value
    postGraduate: false,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }, // function value

    // calcAge: function () {
    //     // console.log(this); // * this === object name
    //     return 2021 - this.birthYear; // which is jonas.birthYear which gives 1987
    // }, // function value

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }, // function value

    getSummary: function () {
        return `${this.firstName} is a ${this.age} - years old ${abdul.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }, // Challenge

    getDetails: function () {
        return `${this.firstName} is a ${this.calcAge()} - years old ${abdul.job}, and he has ${this.postGraduate ? 'a' : 'no'} post graduate qualification.`
    }
};

console.log(abdul.calcAge());
console.log(abdul.age);
console.log(abdul.age);
console.log(abdul.age);


console.log(abdul['calcAge'](1987));

// Challenge
// "Abdul is a 34 - year engineer, and he has a/no driver's license."
console.log(abdul.getSummary());
console.log(abdul.getDetails());
