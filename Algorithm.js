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



//Today is Monday, January 1, 2017. 
//So, what day of the week is x month y in 2017? 
//Write a program to find out.

//In the first line, with a space in between, 
//x(1 ≤ x ≤ 12) and y(1 ≤ y ≤ 31) are given. 
//For reference, in 2017, January, March, May, 
//July, August, October, and December have 31 days, 
//April, June, September and November have 30 days,
// and February has 28 days.

//On the first line, one of SUN, MON, TUE, WED, THU, FRI, 
//or SAT is printed depending on what day of the week 
//x month y is.

// 1 1      Mon
// 3 14     Wed
// 9 2      Sun
//12 25     Tue


let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let result = new Date(`2017-${input[0]}-${input[1]}`);

result.setDate(result.getDate()+1);

console.log(result.toString().split(' ')[0].toUpperCase());

//other answer

let input = require("fs").readFileSync('/dev/stdin').toString().split(' ');
let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
console.log(day[new Date("2018-"+input[0]+"-"+input[1]).getDay()]);



// John got a bad mark in math. The teacher 
// gave him another task. John is to write 
// a program which computes the sum of integers 
// from 1 to n. If he manages to present a correct 
// program, the bad mark will be cancelled.

// Write a program which:

// reads the number n from the standard input,
// computes the sum of integers from 1 to n,
// writes the answer to the standard output.


let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let n = parseInt(input);

console.log((n * (n+1))/2);


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