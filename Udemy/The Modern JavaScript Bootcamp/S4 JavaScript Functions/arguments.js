// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Deafult arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// A 25% tip on $40 would be $10
let getTip = function (total , tipPer = .2) {
    let per = tipPer * 100;
    let tip = total * tipPer;
    return `A ${per}% tip on $${total} would be $${tip}`;
}

let tip = getTip (100)
console.log (tip)

tip = getTip (100,.25)
console.log (tip)