let varOne = 'varOne'; // Global Scope (varOne)

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo' // Local Scope (varTwo)
    console.log(varTwo);

    if (true) {
        let varFour = 'varFour'; // Local Scope (varFour)
    }
}

if (true) {
    let varThree = 'varThree';  // Local Scope (varThree)
}

console.log(varTwo);