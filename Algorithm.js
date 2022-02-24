// Basic input //

console.log("Hello World!");


//A+B Given two integers A and B, calculate their sum.//


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);

//A+B Given two integers A and B, calculate their sum.//

// A and B are different line //

// Using a \n //

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);

// A + B //
//First line has Test case number T//
// Each test case are one line, each line include A and B//
//Example//
//Input   //Output
//5 (Total Test case)        
//1 1       2
//2 3       5
//3 4       7
//9 8       17
//5 2       7

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const T = inputData[0];

for(let i = 1; i<=T; i++) {
    let AB = inputData[i].split(' '); 


    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

//1 1       2
//2 3       5
//3 4       7
//9 8       1
//5 2       7

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");



for(let i = 0; i < inputData.length - 1; i++) {
    let AB = inputData[i].split(' '); 
  
    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

//1 1       2
//2 3       5
//3 4       7
//9 8       1
//5 2       7
//0 0 


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split("\n");



for(let i = 0; i < inputData.length - 1; i++) {
    let AB = inputData[i].split(' ').map(v => v * 1); 
  
    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

