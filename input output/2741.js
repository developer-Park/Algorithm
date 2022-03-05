   //2741

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
