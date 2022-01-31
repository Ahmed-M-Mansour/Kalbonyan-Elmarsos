const mongoose = require('mongoose' ) ; 
const validator = require('validator')
const bcrypt = require('bcryptjs') ; 
const jwt = require('jsonwebtoken'); 
const Task = require('./task')

const userSchema = mongoose.Schema({
    name:{
        type: String , 
        required: true , 
        trim: true
    } , 
    password:{
        type: String , 
        required: true , 
        trim: true , 
        validate(value){
            if(value.length < 6 ){
                throw new Error('Passwrd muse be more thsn 6 ch ') ; 
            }
            if(value.includes('password')){
                throw new Error('Its must bea uniqe ')
            }
        }
    },
    email:{
        type: String , 
        unique: true ,
        required: true , 
        trim: true, 
        lowercase: true , 
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('its not an Email! ')
            }
        }
    } , 
    age:{
        type: Number  , 
        default: 0 , 
        validate(value){
            if(value < 0) {
                throw  new Error('Must be a Number') ; 
            }   
        }
    }, 
    tokens: [{
        token:{
            type: String , 
            required: true  
        }
    }] , 
    avatar:{
        type: Buffer 
    }
},{
    timestamps: true 
})



userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})


userSchema.methods.toJSON =  function(){
    const user = this ; 
    const userObject = user.toObject()
    delete userObject.password ; 
    delete userObject.tokens ; 
    delete userObject.avatar ; 
    return userObject ; 
}
userSchema.methods.generateAuthToken = async function (){
    const user = this ; 
    const token = jwt.sign({_id: user._id.toString()} , process.env.JWT_SECRET ) ; 
    user.tokens = user.tokens.concat({token}) 
    await user.save(); 
    return token ; 
}
userSchema.statics.findByCreadentails = async(email , password) =>{
    const user = await User.findOne({email}) ; 
    if(!user){
        throw new Error('Unable to Login')
    }
    const isMatch = await bcrypt.compare(password , user.password) ; 
    if(!isMatch){
        throw new Error('Unable to Login')
    }
    return user ; 
}
// Hash the Password before saving 
userSchema.pre('save' , async function(next){
    const user = this ; 
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password , 8 ) ; 
    }
    next(); 
})

// Delete user tasks when user is removed 
userSchema.pre('remove' , async function(next){
    const user = this ; 
    await Task.deleteMany({owner: user._id}) 
    next() ; 

})
const User = mongoose.model('User' , userSchema )

module.exports = User ; 

