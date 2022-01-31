const request = require('supertest') ;  
const app = require('../src/app') ; 
const User = require('../src/models/user') ; 
const { testUserID ,testUser ,  setupDatabase } = require('../tests/fixtures/db') ; 

beforeEach(setupDatabase);
  

test("Sign Up a new user " , async()=>{
    const response = await request(app).post('/users').send({
        name: 'Ahmed Test ' , 
        email: 'AhmedTest@test.com' , 
        password: 'ahmedtest'
    }).expect(201) 
        // Assert thatthe DB was changed correctly 
    const user = await User.findById(response.body.user._id) ; 
    expect(user).not.toBeNull() ; 
        // Assertion about the response 
    expect(user.password).not.toBe('ahmedtest') ; 
    expect(response.body).toMatchObject({
        user:{
            name: 'Ahmed Test' , 
            email: 'ahmedtest@test.com'
        } , 
        token: user.tokens[0].token
    })

})

test("should Login" , async ()=>{
    const response = await request(app).post('/users/login').send({
        email: testUser.email , 
        password: testUser.password 
    }).expect(200)
    const user = await User.findById(testUserID) ; 
    expect(response.body.token).toBe(user.tokens[1].token)
})

test("non exesting user" , async ()=>{
    await request(app).post('/users/login').send({
        email: testUser.email , 
        password: 'wrongPassword'
    }).expect(400)
})

test("Read User Profile" , async ()=>{
    await request(app).get('/users/me')
                      .set('Authorization' , `Bearer ${testUser.tokens[0].token}`)
                      .send()
                      .expect(200) 
})

test("should not Read User Profile" , async ()=>{
    await request(app).get('/users/me')
                        .send()
                        .expect(401)
})
// Test that the user is deleted 
test("Should Delete Account for User" , async ()=>{
    const response = await request(app).delete('/users/me')
                                        .set('Authorization' , `Bearer ${testUser.tokens[0].token}`)
                                        .send()
                                        .expect(200)
    const user = await User.findById(testUserID) ; 
    expect(user).toBeNull() 
})

test("Should Not Delete Account for User" , async ()=>{
    await request(app).delete('/users/me')
                                .send()
                                .expect(401)
})

test('should upload profile pic' , async ()=>{
    await request(app).post('/users/me/avatar') 
                        .set('Authorization' , `Bearer ${testUser.tokens[0].token}`)
                        .attach('avatar' , 'tests/fixtures/profile-pic.jpg')
                        .expect(200) ; 
    const user = await User.findById(testUserID)  ;
    expect(user.avatar).toEqual(expect.any(Buffer)) 
})
// Test for Update 
test('should Update user' , async ()=>{
    await request(app).patch('/users/me')
                        .set('Authorization' , `Bearer ${testUser.tokens[0].token}`)
                        .send({age:22})
                        .expect(200) 
    const user = await User.findById(testUser) ; 
    expect(user.age).toEqual(22) ; 
})

test('should Not Update user' , async ()=>{
    await request(app).patch('/users/me')
                        .send({age:25})
                        .expect(401) 
     const user = await User.findById(testUser) ; 
     expect(user.age).toEqual(0) ;
})