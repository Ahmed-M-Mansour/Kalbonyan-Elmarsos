let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

const person = {
    name: 'Mansour',
    age: 21,
    location: '6th of october, Giza'
}

console.log(`My name is ${person.name}, I'm ${person.age} years old, based on ${person.location}.`)

person.age += 1;

console.log(`Holla yesterday was my ${person.age} Birthday!`)