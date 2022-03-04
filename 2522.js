//2522
//3
// *
// **
// ***
// **
// *


const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let star ='';

for(let i=1; i<=input; i++){
  star += ' '.repeat(input - i) +  '*'.repeat(i) + '\n';
    
}

for(let i =1; i<input; i++){
    star += ' '.repeat(i) + '*'.repeat(input-i) + '\n';
}


console.log(star);
