let num = 103.941

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Challenge area
// 1 - 5 - true if correct - false if not correct
const min = 1,
    max = 5;
randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

const makeGuess = function (guess) {
    if (guess === randomNumber) {
        return `Wow!! You are master`
    } else {
        return `Giva another try`
    }
}

console.log(makeGuess(1))