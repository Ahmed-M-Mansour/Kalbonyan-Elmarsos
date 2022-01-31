const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Mansour',
    age: 21
} , {
    name: 'Ahmed',
    age: 22
} , {
    name: 'Muhammed',
    age: 31
}]

const under30 = people.filter((person) => person.age < 30)
const equal22 = people.filter((person) => person.age === 22)

console.log(under30)
console.log(equal22)
