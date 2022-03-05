
//2445
//5
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

const input = require('fs').readFileSync('/dev/stdin').toString();

for (let i=1; i <= input; i++) {
    stars = '*'.repeat(i) + ' '.repeat(input-i);
    stars += stars.split('').reverse().join('');
    console.log(stars);
}

for (let i=1; i < input; i++) {
    stars = '*'.repeat(input-i) + ' '.repeat(i);
    stars += stars.split('').reverse().join('');
    console.log(stars);
}


