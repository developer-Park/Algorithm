
//2739

//2 //2*1=2
    //2*2=4
    //2*3=6
    //2*4=8
    //2*5=10
    //2*6=12
    //2*7=14
    //2*8=16
    //2*9==18

  

            
let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input[0]);

for (let i = 1; i < 10; i++) {
    
    console.log(`${num} * ${i} = ${num * i}`);
}


///////////////////////////////////////////////


let input = Number(require('fs').readFileSync('/dev/stdin').toString());




for(let i = 1; i <= 9; i++) {

let A = '';
    A += `${input} * ${i} = ${input * i}`;
    console.log(A);
   
}

