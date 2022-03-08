//BaekjoonOnlineJudge

//BaekjoonOn
//lineJudge

//OneTwoThreeFourFiveSixSevenEightNineTen

//OneTwoThre
//eFourFiveS
//ixSevenEig
//htNineTen



let input = require('fs').readFileSync('/dev/stdin').toString();


for(let i = 0; i <= input.length; i+=10) {

    console.log(input.slice(i, i+10));

}


// The slice function receives the start index and end index of the array to be cut as parameters,

//It returns the elements in between as a new array.

//At this point, the original array, arr, is not changed.
