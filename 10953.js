//10953

//5
//1 , 1       2
//2 , 3       5
//3 , 4       7
//9 , 8       1
//5 , 2       7
//0 , 0 



const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const T = inputData[0];

for(let i = 1; i<=T; i++) {
    let AB = inputData[i].split(","); 


    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}
