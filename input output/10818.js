
//10818
//5
//20 10 35 30 7

//min : 7 max : 35



let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let numberStr = input[1].split(' ');
let numbers = numberStr.map(function(cur) {
  return Number(cur);
});
let max = numbers[0];
let min = numbers[0];

for(let i=1; i<count; i++){
  if(max < numbers[i]) max = numbers[i];
  if(min > numbers[i]) min = numbers[i];    
}
console.log(`${min} ${max}`);


/////////////////////////////////////////////////


let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

console.log(`${Math.min(...input[1].split(' '))} ${Math.max(...input[1].split(' '))}`);


// ES6/ES2016 It's easier through destructing 
//assignments. The destructing  assignment 
//syntax is a JavaScript expression that 
//allows you to extract data from an array 
//or object and turn it into a separate variable.
