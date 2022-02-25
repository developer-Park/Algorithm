
        
let input = require('fs').readFileSync('/dev/stdin').toString().split(''));

let result = new Date(`2007-${input[0]}-${input[1]}`);

result.setDate(result.getDate()+1);

console.log(result.toString().split('')[0].toUpperCase());



