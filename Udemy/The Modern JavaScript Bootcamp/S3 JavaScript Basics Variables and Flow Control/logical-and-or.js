// Meaning and - or

let temp = 55;

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Opeartor - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out');
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('Eh. Do what you want');
}

// Challenge area

// 1 Mean true, 0 means false
let isGuest1Vegan = 1;
let isGuest2Vegan = 0;

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menue

if (isGuest1Vegan && isGuest2Vegan) {
    console.log('Here is VEGAN dishes');
}
else if (isGuest1Vegan || isGuest2Vegan) {
    console.log('Here is our full menue with VEGAN dishes');
}
else {
    console.log('Here is our full menue');
}