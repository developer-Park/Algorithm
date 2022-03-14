//11021

//5 
//1 1 Case #1: 2
//2 3 Case #2: 5
//3 4 Case #3: 7
//9 8 Case #4: 17
//5 2 Case #5: 7


 
let inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for(let i = 1; i<=inputData[0]; i++) {
    let AB = inputData[i].split(' '); 

  console.log(`Case #${i}: ${parseInt(AB[0]) + parseInt(AB[1])}`);
    
}


//////////////////////////////////////


let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = input[0];

for (let i = 1; i<=T; i++) {

    let AB = input[i].split(' ');

    let a = parseInt(AB[0]);
    let b = parseInt(AB[1]);
    console.log(`Case #${i}: ${a+b}`);


}


/////
///





