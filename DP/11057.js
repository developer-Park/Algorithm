var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString();
inputs = Number(inputs);
var dp = [[], new Array(10).fill(1)];
for(var i=2; i<=inputs; i++){
    dp[i] = [];
    dp[i][0] = dp[i-1][0] % 10007;
    for(var j=1; j<10; j++){
    	dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 10007;    
    }
}
console.log(dp[inputs].reduce((a,v)=> a+v, 0) % 10007);

//

///////////////////////

const fs = require('fs');
const N = fs.readFileSync("./dev/stdin").toString().trim()*1;

let dp  = Array.from(Array(N+1),()=>[]);
dp[1] = [1,1,1,1,1,1,1,1,1,1];
dp[2] = [1,2,3,4,5,6,7,8,9,10];
dp[3] = [1,3,6,10,15,21,28,36,45,55];
for(let i = 4; i<=N; i++){
    for(let j = 0; j<10; j++){
        dp[i][j] = 0;
        for(let k = 0; k<=j; k++){
            dp[i][j] = (dp[i][j] + dp[i-1][k])%10007;
        }
    }
}

console.log(dp[N].reduce((r,v)=>{return (r+v)%10007},0))
