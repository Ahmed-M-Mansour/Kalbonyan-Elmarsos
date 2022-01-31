const app = require('./app') ; 

const port = process.env.PORT  ; 

app.listen(port , () =>{
    console.log('App is running on Port: ' , port)
}); 


// C:\Users\ahmed\mongodb\bin/mongod.exe --dbpath=C:\Users\ahmed\mongodb-data 


