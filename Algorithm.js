// Basic input //

console.log("Hello World!");


//A+B Given two integers A and B, calculate their sum.//


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);

//A+B Given two integers A and B, calculate their sum.//

// A and B are different line //

// Using a \n //

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);

// A + B //
//First line has Test case number T//
// Each test case are one line, each line include A and B//
//Example//
//Input   //Output
//5 (Total Test case)        
//1 1       2
//2 3       5
//3 4       7
//9 8       17
//5 2       7

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const T = inputData[0];

for(let i = 1; i<=T; i++) {
    let AB = inputData[i].split(' '); 


    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

//1 1       2
//2 3       5
//3 4       7
//9 8       1
//5 2       7

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");



for(let i = 0; i < inputData.length - 1; i++) {
    let AB = inputData[i].split(' '); 
  
    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

//1 1       2
//2 3       5
//3 4       7
//9 8       1
//5 2       7
//0 0 


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split("\n");



for(let i = 0; i < inputData.length - 1; i++) {
    let AB = inputData[i].split(' '); 
  
    console.log(parseInt(AB[0]) + parseInt(AB[1]));
}

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


//5 
//1 1 Case #1: 1 + 1 = 2
//2 3 Case #2: 2 + 3 = 5
//3 4 Case #3: 3 + 4 = 7
//9 8 Case #4: 9 + 8 = 17
//5 2 Case #5: 5 + 2 = 7


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split("\n");

const T = inputData[0];

for(let i = 1; i<=T; i++) {
    let AB = inputData[i].split(' '); 
    let A = parseInt(AB[0]);
    let B = parseInt(AB[1]);
   
    console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
  
}

//Hello           Hello
//Baekjoon        Baekjoon 
//Online Judge    Online Judge



let input = require('fs').readFileSync('/dev/stdin').toString();

console.log(input);

//11720
//5
//54321   =  15

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let A = parseInt(input[0]);
let B = input[1].split("");
let sum = 0;

for (let i = 0; i<A; i++) {

    sum += parseInt(B[i]);
}

console.log(sum);

// 5   
        //1
        //2
        //3
        //4
        //5


let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);

//5
        //5
        //4
        //3
        //2
        //1


let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = input; i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);



//2 //2*1=2
    //2*2=4
    //2*3=6
    //2*4=8
    //2*5=10
    //2*6=12
    //2*7=14
    //2*8=16
    //2*9==18

            
let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input[0]);

for (let i = 1; i < 10; i++) {
    
    console.log(`${num} * ${i} = ${num * i}`);
}



