const express = require('express') ; 
const User = require('../models/user') ; 
const auth = require('../middleware/auth')
const multer = require('multer') ;
const sharp = require('sharp')
const {sendWelcomeEmail , sendLastEmail} = require('../emails/account') ; 
const router = express.Router() ; 

// create a User 
router.post('/users' , async (req , res)=>{
    const user = new User(req.body) ;  
    try{
        await user.save(); 
        sendWelcomeEmail(user.email , user.name) ; 
        const token = await user.generateAuthToken();
        res.status(201).send({user , token }) ; 
    }catch(e){
        res.status(400).send(e)
    }
})

// Login 
router.post('/users/login' , async (req , res)=>{
    try{
        const user = await User.findByCreadentails(req.body.email , req.body.password) ; 
        const token = await user.generateAuthToken()
        res.send({user , token }) ; 
    }catch(e){
        res.status(400).send(e)  ;
    }
})

// Log out 
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})


// log out from all Sessions 
router.post('/users/logoutAll' , auth , async(req,res)=>{
    try{
        req.user.tokens = [] 
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send() 
    }
})

// Read Users profile 
router.get('/users/me' , auth , async (req , res)=>{
    res.send( req.user) 
 
})
// Read one User  xxxxxxx 
router.get('/users/:id' , async (req , res) =>{
    const _id = req.params.id  ; 
    try{
        const user = await User.findById(_id) ; 
        !user ? res.status(404).send() : res.send(user) ; 
    }catch(e){
        res.status(500).send(e)
    }
})

// Update User 
router.patch('/users/me' , auth , async (req , res)=>{
    const updates = Object.keys(req.body); 
    const allawedUpdates = ['name' , 'age' , 'email' , 'password'] ; 
    const isValidOperaton = updates.every(update=> allawedUpdates.includes(update) ) 
    if(!isValidOperaton){
        return res.status(404).send("Error: Invaild Update ") 
    }
    try{
        updates.forEach(update =>  req.user[update] = req.body[update] )
        await req.user.save() ;

        res.send(req.user) ; 
    }catch(e){
        res.status(400).send(e) ; 
    }
})
// Delete User 
router.delete('/users/me' , auth , async (req , res)=>{
    try{
        await req.user.remove() ; 
        sendLastEmail(req.user.email , req.user.name) ; 
        res.send(req.user) ; 
    }catch(e){
        res.status(500).send(e) ; 
    }
})

// for profile pic uploading 
const upload = multer({
    limits: {
        fileSize: 1000000 
    } , 
    fileFilter(req , file , cb){
        if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
            return cb(new Error('file must be an image'))
        }
        cb(undefined , true ) ; 
    }
}) ; 
// upload profile pic 
router.post('/users/me/avatar' , auth ,  upload.single('avatar') , async (req , res )=>{
        const buffer = await sharp(req.file.buffer).resize({width:250 , height:250}).png().toBuffer() ; 
        req.user.avatar = buffer ; 
        await req.user.save() ; 
        res.send() ; 
} ,(error , req ,res ,next)=>{
        res.status(400).send({error: error.message}) ; 
    })

// Delete Profile pic 
router.delete('/users/me/avatar' , auth , async(req , res) =>{
    req.user.avatar = undefined ; 
    await req.user.save() ; 
    res.send() ; 
}) 

// show profile pic 
router.get('/users/:id/avatar' ,  async (req , res)=>{
    try{
        const user = await User.findById(req.params.id) ; 
        if(!user || !user.avatar){
            throw new Error('No pics are found')
        }
        res.set('Content-Type' , 'image/png') ; 
        res.send(user.avatar) ; 
    }catch(e){
            res.status(404).send() ; 
    }
})

module.exports = router ; 