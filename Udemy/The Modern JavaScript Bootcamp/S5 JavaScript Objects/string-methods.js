let name = '  Andrew Mead '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area

const isValidPassLong = function (pass) {
    if (!pass.includes('password') && pass.length > 8) {
        return `Valid password`
    } else {
        return `Invalid password`
    }
}
const isValidPassShort = function (pass) {
    return !pass.includes('password') && pass.length > 8
}

// isValidPassword

console.log(isValidPassLong('asfdfg'))
console.log(isValidPassLong('asfdfg12!#!!#'))
console.log(isValidPassLong('asfdfgpasswordkljkb2781^%*'))

console.log(isValidPassShort('asfdfg'))
console.log(isValidPassShort('asfdfg12!#!!#'))
console.log(isValidPassShort('asfdfgpasswordkljkb2781^%*'))