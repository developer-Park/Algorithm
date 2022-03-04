//11021

//5 
//1 1 Case #1: 2
//2 3 Case #2: 5
//3 4 Case #3: 7
//9 8 Case #4: 17
//5 2 Case #5: 7



const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

for(let i = 1; i<=inputData[0]; i++) {
    let AB = inputData[i].split(' '); 

  console.log(`Case #${i}: ${parseInt(AB[0]) + parseInt(AB[1])}`);
    
}
