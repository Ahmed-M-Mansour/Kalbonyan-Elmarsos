require('../src/db/mongoose') ; 
const Task = require('../src/models/task') ; 

Task.findByIdAndRemove('619639b55ef7591ad4154670').then(task =>{
    return  Task.countDocuments({completed: false}) ; 
    
}).then(result=>{
    console.log(result) ;
}).catch(err=>{
    console.log(err) ; 
})

const deleteTask = async (id)=>{
    const task = await Task.findByIdAndRemove(id) ; 
    const count = await Task.countDocuments({completed:false}) ; 
    return count ; 
}

deleteTask('619639a85e79e2231467ba35').then(res =>{
    console.log(res)
}).catch(e =>{
    console.log(e) ; 
})