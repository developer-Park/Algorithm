//10952

//1 1       2
//2 3       5
//3 4       7
//9 8       1
//5 2       7
//0 0 


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split("\n");








let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length - 2; i++) {
    let AB = input[i].split(' ');
    
    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}





for(let i = 0; i < inputData.length - 1; i++) {
    let AB = inputData[i].split(' '); 
  
    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

/////////////////////////////////////////////////////////////////