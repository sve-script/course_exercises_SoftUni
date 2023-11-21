const inputString = "Mi*&^%$ch123o!#$%#nne787)";
const regex = /Michonne|\d+/g;

const matches = inputString.match(regex);
console.log(matches);