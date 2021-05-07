const age = 34;
// age >= 18 ? console.log(`I like to drive car`) : console.log(`I like to drive cycle`);

const drive = age >= 18 ? "car" : "cycle";
console.log(`I like to drive ${age >= 18 ? "car" : "cycle"}`)
console.log(`I like to drive ${drive}`);

let drive2;
if (age >= 18) {
    drive2 = "car";
} else {
    drive2 = "cycle";
}
console.log(`I like to drive ${drive2}`);