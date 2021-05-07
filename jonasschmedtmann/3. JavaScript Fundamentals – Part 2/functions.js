'use strict'

function logger() {
    console.log('my name is azeem amir');
}

//calling / running / invoking function
logger();
logger();

function fruitProcessor(dates, pomegranates) {
    // console.log(dates, pomegranates);
    const juice = `juice with ${dates} dates and ${pomegranates} pomegranates.`;
    return juice;
}

const datesPomegranates = fruitProcessor(5, 3); //giving input paramaters and capturing the return value by datesPomegranates
console.log(datesPomegranates);
console.log(fruitProcessor(5, 3)); //reading directly without capturing

const datesPomegranatesJuice = fruitProcessor(1, 3);
console.log(datesPomegranatesJuice);