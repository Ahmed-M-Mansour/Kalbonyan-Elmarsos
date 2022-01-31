const chalk = require('chalk')
const validator = require('validator');
const { argv } = require('yargs');
const yargs = require('yargs') ; 
    
const notes = require('./notes.js') ; 

 
// console.log(process.argv) ; 

// create Add command 
yargs.command({
    command: 'add' , 
    describe: 'add a new note' ,
    builder:{
        title:{
            describe: 'title of a note ' , 
            demandOption: true , 
            type: 'string'
        } , 
        body:{
            describe: 'The describtion of note ' , 
            demandOption: true , 
            type: 'string' 
        }
    },
    handler:argv =>{
        notes.addNote(argv.title , argv.body) ; 

    }
})
// create remove command 
yargs.command({
    command: 'remove' , 
    describe: 'remove a new note' ,
    builder:{
        title:{
        describe:'title of note ' , 
        type: 'string' , 
        demandOption: true 
        } , 
        body:{
        describe:'body of note ' , 
        type: 'string' , 
        demandOption: false 
        }
    },
    handler:argv =>{
        notes.removeNote(argv.title) ; 
    }
})
// create List command 
yargs.command({
    command: 'list' , 
    describe: 'list of notes' ,
    handler:() =>{
       notes.ListNotes() ;
    }
})
// create read command 
yargs.command({
    command:'read' , 
    describe: 'read some stuff' , 
    builder:{
        title:{
            command: 'read' , 
            type: 'string' , 
            demandOption: true 
        }
    },
    handler: argv =>{
        notes.readNote(argv.title)
    }
})
// console.log(yargs.argv) ; 
yargs.parse() ; 







// const command = process.argv[2] ; 
// if(command == "add"){
//     console.log('Adding Note')
// }else if(command == "remove"){
//     console.log("Removing Note ")
// }else console.log("please specify ur Order ") ; 


// const msg = getNotes();
// console.log(chalk.green.inverse.bold('Success!') , chalk.blue('!'))
// console.log(chalk.green.inverse.red('Success!') , chalk.blue('!'))

// console.log(validator.isEmail('Ahmed@gmail.com')) ; 
// console.log(validator.isURL('Ahmed@gmai')) ; 

// const fs = require('fs')
// // fs.writeFileSync('note.txt' , 'Hi Iam Ahmed ')
// fs.appendFileSync('note.txt' , " append some text ")