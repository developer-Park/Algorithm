//2442
//5
//    *
//   ***
//  *****
// *******
//*********

const input = Number(require('fs').readFileSync('/dev/stdin').toString());


let star = '';

for(let i=1; i<=input; i++){
  star += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n';

}

console.log(star);

//