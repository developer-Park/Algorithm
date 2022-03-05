//11720
//5

//54321   =  15

// 25
// 7000000000000000000000000  =  7

// 11 
// 10987654321       = 46


let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let A = parseInt(input[0]);
let B = input[1].split("");
let sum = 0;

for (let i = 0; i<A; i++) {

    sum += parseInt(B[i]);
}

console.log(sum);
