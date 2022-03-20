let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let A = '';


for(let i = 1; i <= 9; i++) {


    A += `${input} * ${i} = ${input * i}`;
    
   
}

console.log(A);