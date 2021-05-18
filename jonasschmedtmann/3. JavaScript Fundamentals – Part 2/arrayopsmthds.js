'use strict';

// add elements

// .push adds the element at the end of array
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);

const newLength = friends.push('Smith'); //saving to a variable here...
console.log(newLength); // .push gives index element no of added element
console.log(friends);

// .unshift adds the element at the start of array
friends.unshift('John');
console.log(friends);


// remove elements

// .pop removes the element at the end of array
friends.pop();
console.log(friends);
const popped1 = friends.pop();
console.log(popped1); // .pop gives index element name of removed element
console.log(friends);
// .shift removes the element at the start of array
friends.shift();
console.log(friends);


// .indexOf gives the index no of the queried string or data in the array and it is case sensitive, if it not in the array it gives -1
console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Bob'));
// .includes gives the boolean value of the queried string or data whether it is in the array
console.log(friends.includes('Michael'));
console.log(friends.includes('amir'));

// .includes uses strict equality
friends.push(23); //here if we use number 23 it checks for 23 number and not the 23 string
console.log(friends);
console.log(friends.includes('23')); // 23 is string here
console.log(friends.includes(23)); // 23 is number here

if (friends.includes('Baabar')) {
    console.log('You have a friend called Baabar');
} else {
    console.log("You don't any friend called Baabar");
}

if (friends.includes('Michael')) {
    console.log('You have a friend called Michael');
}