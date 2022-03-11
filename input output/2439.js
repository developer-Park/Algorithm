// 2439

//5

//     *
//    **
//   ***
//  ****
// *****




let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

for (let i = 0; i < num; i++) {
  let star = '';
    
  for (let j = num - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  
  console.log(star);
}




const input = Number(require('fs').readFileSync('/dev/stdin').toString());



for(let i = 0; i<input; i++) {
  let star ='';
  for (let j = 0; j<input-i; j++) {
  star+= ' ';
  }
  for (let k = 0; k<i+1; k++) {
    star+='*';
    
  }
  console.log(star);
  
}



let input = require('fs').readFileSync('/dev/stdin').toString();


for (let i = 0; i < input; i++) {
  let star = '';

  for (let j = 0; j < input-i-1; j++){
    star += ' ';
}
  for (let j = 0; j <= i; j++) {
    star += '*';
  }
  console.log(star);
}














