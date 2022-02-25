
        
let input = Number(require('fs').readFileSync('/dev/stdin').sort().reverse.toString());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);

