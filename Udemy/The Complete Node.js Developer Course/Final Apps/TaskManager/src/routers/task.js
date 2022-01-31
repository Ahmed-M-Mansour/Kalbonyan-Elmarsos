const express = require('express') ; 
const Task = require('../models/task') ; 
const auth = require('../middleware/auth')
const {sendWhenCreateTask} = require('../emails/account')

const router = express.Router(); 

//create a Task 
router.post('/tasks' , auth, async (req, res) => {
    const task = new Task({
        ...req.body , 
        owner: req.user._id , 
        ref: 'User'
    }) ; 
    try{
       await task.save() ; 
       sendWhenCreateTask(req.user.email , req.user.name)
       res.status(201).send(task) ; 
    }catch(e){
        res.status(400).send({error: e}) ; 
    }
})
// read all Tasks 
// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
router.get('/tasks' ,auth , async (req, res)=>{
    const match = {}
    const sort = {}
        if(req.query.completed){
            match.completed = req.query.completed === 'true' 
        }
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1 
    try{
        // const tasks =  await Task.find({owner: req.user._id}) ; 
       await req.user.populate({
           path: 'tasks' , 
           match , 
           options:{
                      limit: parseInt(req.query.limit)    , 
                      skip: parseInt(req.query.skip)    ,
                      sort
                   }  
       }).execPopulate()
        res.send(req.user.tasks) ; 
    }catch(e){
        res.send(e) ; 
    }
})

// Read one Task 
router.get('/tasks/:id' , auth ,async (req ,res) =>{
    const _id = req.params.id ; 
    try{
        // const task = await Task.findById(_id ) ; 
        const task = await Task.findOne({_id  , owner: req.user._id })
        !task ? res.status(404).send() : res.send(task) ; 
    }catch(e){
        res.status(500).send(e) ;
    }
})
// Update Task 
router.patch('/tasks/:id' , auth , async (req , res)=>{
    const updates = Object.keys(req.body) ; 
    const allowedUpdates = ['description' , 'completed'] ; 
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if(!isValidOperation){
        res.status(400).send(` Error: Invalid Update `) ;
    }
    try{
        const task = await Task.findById({_id: req.params.id , owner: req.user._id}) ; 
        if(!task){
            return res.status(404).send();
        }
        updates.forEach(update => task[update] = req.body[update]) 
        await task.save() ;
        res.send(task)
    }catch(e){
        res.status(400).send(e) ; 
    }
})
// Delete Task 
router.delete('/tasks/:id' , auth , async (req , res)=>{
    try{
        const task = await Task.findOneAndDelete({_id:req.params.id , owner: req.user._id}) ; 
        if(!task){
            return res.status(404).send() ; 
        }
        res.send(task) ; 
    }catch(e){
        res.status(500).send(e) ; 
    }
})

module.exports = router ; 