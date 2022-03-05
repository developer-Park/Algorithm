//10992
//1     *        2       *
//                      ***

//3     *        4        *
//     * *               * *
//    *****             * * *
//                     *******


let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i <= input; i++){
    let star = '';
    if (i === 1)
        star += ' '.repeat(input - 1) + '*';
    else if (i === input)
        star += '*'.repeat(2 * input - 1);
    else
        star += ' '.repeat(input - i) + '*' + ' '.repeat(i * 2 - 3) + '*';
    console.log(star);
}
