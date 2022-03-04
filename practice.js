const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let star ='';

for(let i=input; 0<i; i--){
  star += ' '.repeat(input-i) +  '*'.repeat(2*i-1) + '\n';
    
}

for(let i =2; i<input; i++){
    star += ' '.repeat(input-i) + '*'.repeat(2*i-1) + '\n';
}


console.log(star);




9 7 5 3 1
1 3 5 7 9 

5+4 4+3 3+2 2+1 1+0 
0    1   2   3   4
