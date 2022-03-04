//1924

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
