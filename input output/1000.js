// 1000
//A+B Given two integers A and B, calculate their sum.//


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);
