let fs = require("fs");
let [num1, num2] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let oneNum = num2 % 10;
let tenNum = Math.floor((num2 % 100)/10);
let hunNum = Math.floor(num2 / 100);

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hunNum);
console.log(num1 * num2);