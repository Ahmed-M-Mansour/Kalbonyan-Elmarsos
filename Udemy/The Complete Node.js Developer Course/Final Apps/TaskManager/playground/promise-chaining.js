require('../src/db/mongoose' ) ; 
const User = require('../src/models/user') ; 

// User.findByIdAndUpdate('61963f435423e512e876fbc8' , { name: "Eng Mohamed Ali "}).then(user=>{
//     console.log(user) ; 
//     return User.countDocuments({age: 0 })
// }).then(result =>{
//     console.log(result) ; 
// }).catch(err =>{
//     console.log(err) ; 
// })

const updateAgeAndCount = async (id , age )=>{
    const user  = await  User.findByIdAndUpdate(id , {age}) ;  
    const count = await  User.countDocuments({age}) ; 
    return count ; 
}

updateAgeAndCount('6193f791773e3e1d3023eec2' , 55).then(res =>{
    console.log(res)
}).catch(e =>{
    console.log(e) ; 
})

// 