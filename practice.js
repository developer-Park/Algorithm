const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const T = inputData[0];

for(let i = 1; i<=T; i++) {
    let AB = inputData[i].split(" "); 


    console.log("Case #" + T + ": " + parseInt(AB[0]) + parseInt(AB[1]));
}