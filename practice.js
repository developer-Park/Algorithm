const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split("\n");



for(let i = 0; i < inputData.length - 1; i++) {
    let AB = inputData[i].split(' ').map(v => v * 1); 
  
    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

