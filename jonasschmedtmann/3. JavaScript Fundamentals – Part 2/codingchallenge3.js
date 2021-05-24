const markProperties = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const johnProperties = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

markProperties.calcBMI(); // adds bmi property in markProperties object

johnProperties.calcBMI(); // adds bmi property in johnProperties object

console.log(markProperties.bmi, johnProperties.bmi);

if (markProperties.bmi > johnProperties.bmi) {
    console.log(`${markProperties.fullName}'s BMI(${markProperties.bmi}) is higher than ${johnProperties.fullName}'s BMI(${johnProperties.bmi}).`)
} else if (johnProperties.bmi > markProperties.bmi) {
    console.log(`${johnProperties.fullName}'s BMI(${johnProperties.bmi} is higher than ${markProperties.fullName}'s BMI(${markProperties.bmi})`)
}