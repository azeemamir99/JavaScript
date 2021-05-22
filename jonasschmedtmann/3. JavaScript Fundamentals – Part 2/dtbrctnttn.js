const amirObject = {
    firstName: 'Azeem', //firstName is the key / property and Azeem is the value.
    lastName: 'Amir',
    age: 2021 - 1987,
    job: 'engineer',
    friends: ['Khalid', 'Wasil', 'Shabaaz']
};
console.log(amirObject);
console.log(amirObject.lastName); //Dot Notation
console.log(amirObject['lastName']); //Bracket Notation

const nameKey = 'Name';
console.log(amirObject['first' + nameKey]);
console.log(amirObject['last' + nameKey]);

// console.log(amirObject.'last' + nameKey); wont work with dot notation

const interestedIn = prompt('What do you want to know about amir? Choose between firstName, lastName, age, job, friends');
console.log(amirObject.interestedIn); // will return undefined for undefined property with dot notation
console.log(amirObject[interestedIn]); //for undefined property use bracket notation for returning values

// since from line 19 undefined is falsy value lets use that to our advantage by creating a logic that when a user accesses a undefined property

if (amirObject[interestedIn]) {
    console.log(amirObject[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, friends`);
}

amirObject.location = 'Warangal'; //add property by dot notation
amirObject['twitter'] = '@azeemamir99'; // add property by bracket notation
console.log(amirObject);

// Challenge
// Azeem has 3 friends, and his best friend is called Khalid, without hardcoding get the values Azeem, 3 and Khalid 
// const azeemFriends = {
//     best: 'Khalid',
//     just: 'Wasil',
//     just: 'Shabaaz'
// };
// console.log(azeemFriend);
console.log(`${amirObject.firstName} has ${amirObject.friends.length} friends, and his best friend is called ${amirObject.friends[0]}.`);