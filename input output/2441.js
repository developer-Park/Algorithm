//2441
//5
//*****
// ****
//  ***
//   **
//    *
const input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

for (let i = 0; i < num; i++) {
    console.log(' '.repeat(i) + '*'.repeat( 2 * num - i));
}
