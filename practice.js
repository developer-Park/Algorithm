let input = require('fs').readFileSync('/dev/stdin').toString();

let A = '';


for(let i = 0; i <= input.length-1; i++) {


    A += i + '\n';
    

}

console.log(A);