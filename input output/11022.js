//11022

//5 
//1 1 Case #1: 1 + 1 = 2
//2 3 Case #2: 2 + 3 = 5
//3 4 Case #3: 3 + 4 = 7
//9 8 Case #4: 9 + 8 = 17
//5 2 Case #5: 5 + 2 = 7


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const T = inputData[0];

for(let i = 1; i<=T; i++) {
    let AB = inputData[i].split(' '); 
    let A = parseInt(AB[0]);
    let B = parseInt(AB[1]);
   
    console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
  
}


/////////////////////////////////////////////////////

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = input[0];

for (let i = 1; i<=T; i++) {

    let AB = input[i].split(' ');

    let a = parseInt(AB[0]);
    let b = parseInt(AB[1]);
    console.log(`Case #${i}: ${a} + ${b} = ${a+b}`);


}






