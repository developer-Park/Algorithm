//8393
// 3 = 6
// 4 = 10
// 5 = 15

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let n = parseInt(input);

console.log((n * (n+1))/2);
