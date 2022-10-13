const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const maxNum = Math.max(...input);
const idxNum = input.indexOf(maxNum);

console.log(maxNum);
console.log(idxNum + 1);