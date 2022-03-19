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