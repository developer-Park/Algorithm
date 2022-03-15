//2558

//A+B Given two integers A and B, calculate their sum.//

// A and B are different line //

// Using a \n //

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);


//////