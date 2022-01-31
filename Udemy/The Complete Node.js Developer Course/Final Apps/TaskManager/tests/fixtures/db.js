const jwt = require('jsonwebtoken') ; 
const mongose = require('mongoose') ; 
const User = require('../../src/models/user') ; 
const Task = require('../../src/models/task') ; 



const testUserID = new mongose.Types.ObjectId()
const testUser = {
    _id:testUserID , 
    name: 'Mansour Ashraf' , 
    email: 'MansourAshraf@me.com' , 
    password: 'Mansour987' ,
    tokens:[
        { 
            token: jwt.sign({_id: testUserID} , process.env.JWT_SECRET)
        }
]
}

const testUserIDTwo = new mongose.Types.ObjectId()
const testUserTwo = {
    _id:testUserIDTwo , 
    name: 'ALi Ashraf' , 
    email: 'ali@me.com' , 
    password: 'Mansour987' ,
    tokens:[
        { 
            token: jwt.sign({_id: testUserIDTwo} , process.env.JWT_SECRET)
        }
]
}

const taskOne = {
    _id: mongose.Types.ObjectId() , 
    description: 'first desc witg db test' , 
    completed: false , 
    owner: testUserID
}

const taskTwo = {
    _id: mongose.Types.ObjectId() , 
    description: 'sec desc witg db test' , 
    completed: true , 
    owner: testUserID
}

const taskThree = {
    _id: mongose.Types.ObjectId() , 
    description: 'Third desc witg db test' , 
    completed: false , 
    owner: testUserID
}
const setupDatabase = async ()=>{
    await User.deleteMany() ; 
    await Task.deleteMany() ;
    await new User(testUser).save()
    await new User(testUserTwo).save() 
    await new Task(taskOne).save() ; 
    await new Task(taskTwo).save() ; 
    await new Task(taskThree).save() ; 

}

module.exports = {
    testUserID ,
    testUser , 
    testUserIDTwo, 
    testUserTwo , 
    taskOne, 
    taskTwo , 
    taskThree,
    setupDatabase  , 
}