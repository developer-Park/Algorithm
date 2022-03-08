
// 10950

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
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const T = inputData[0];

for(let i = 1; i<=T; i++) {
    let AB = inputData[i].split(' '); 


    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

///////////////////////////////////////////////


let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = input[0];

for(let i = 1; i<=T; i++){

    let ab= input[i].split(' ');
    let a = parseInt(ab[0]);
    let b = parseInt(ab[1]);

   
console.log(a+b);


}






