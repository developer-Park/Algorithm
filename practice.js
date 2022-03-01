let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

for (let i = 0; i < num; i++) {
  let star =  '';
    
  for (let j = i + 1; j <= num; j++) {
    star += '*';
  }
  
  console.log(star);
}