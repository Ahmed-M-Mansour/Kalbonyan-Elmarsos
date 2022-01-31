// prototype inhertance
// make a constractor person with Fname, Lname, Age, Likes arguments
class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    // make a prototype method getBio output: Mansour is 22. 
    // Mansour like Biking. Mansour like food.
    getBio() {
        let bio = `${this.firstName} is: ${this.age} years old.`
        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        });
        return bio
    }
    // make a prototype method setName with take full name then fill Fname, Lname
    set fullName(fullName) {
        const name = fullName.split(" ")
        this.firstName = name[0]
        this.lastName = name[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Make a new class inhertated from Person
class Empolyee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grades){
        super(firstName, lastName, age, likes)
        this.grades = grades
    }

    getBio() {
        return this.grades >= 70 ? `${this.firstName} is Passed with: ${this.grades}` : `${this.firstName} is Failed with: ${this.grades}`
    }

    updateGrade(grade) {
        this.grades += grade
    }
}

me = new Empolyee('mans','koura',25,'head','biking')

me.fullName = 'Mansour Ashraf'
console.log(me.getBio())
console.log(me.getYearsLeft())

mans = new Student('Mansour', 'Koura', 22, 'Sleeping', 0)
