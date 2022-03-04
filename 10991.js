
//10991

//1    *    2    *
//              * *

//3    *    4      *
//    * *         * *
//   * * *       * * *
//              * * * *    
   

const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let star = '';

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input - i - 1; j++)
        star = star + ' ';
    for (let j = 0; j < i + 1; j++)
        star = star + "* ";
    star = star + "\n";
}
console.log(star);


