//2446
//5
// *********
//  *******
  // *****
  //  ***
    // *
  //  ***
  // *****
//  *******
// *********
const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let star ='';

for(let i=input; 0<i; i--){
  star += ' '.repeat(input-i) +  '*'.repeat(2*i-1) + '\n';
    
}

for(let i =2; i<=input; i++){
    star += ' '.repeat(input-i) + '*'.repeat(2*i-1) + '\n';
}


console.log(star);
