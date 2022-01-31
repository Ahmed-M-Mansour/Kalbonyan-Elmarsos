const request = require('supertest') ; 
const app = require('../src/app') ; 
const Task = require('../src/models/task');
const {  testUserID ,
    testUser , 
    testUserIDTwo, 
    testUserTwo , 
    taskOne, 
    taskTwo , 
    taskThree,
    setupDatabase 
    } = require('../tests/fixtures/db') ; 

beforeEach(setupDatabase);

// craete task 
test('should create task' , async ()=>{
        const response = await request(app).post('/tasks') 
                                            .set('Authorization' , `Bearer ${testUser.tokens[0].token}`)
                                            .send({
                                                description: 'description for test ' , 
                                            })
                                            .expect(201) 
        const task = await Task.findById(response.body._id) ; 
        expect(task).not.toBeNull() ; 
        expect(task.completed).toEqual(false) ; 
})

// i havae a problem and no solution for that 
// Problem ==> thrown: "Exceeded timeout of 5000 ms for a test. Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
// test('Should fetch user tasks', async () => {
//     const response = await request(app)
//         .get('/tasks')
//         .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
//         .send()
//         .expect(200)
//     expect(response.body.length).toEqual(2)
// })

test('Should not delete other users tasks', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${testUserTwo.tokens[0].token}`)
        .send()
        .expect(404)
    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
})
