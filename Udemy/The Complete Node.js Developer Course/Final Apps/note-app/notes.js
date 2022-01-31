const fs = require('fs')
const chalk = require('chalk');
const { time } = require('console');
const getNotes = ()=> "your Note"; 
// To Add Note 
const addNote = (title , body)=>{
    const notes = loadNotes(); 
    debugger 
    // const dublicateNotes = notes.filter(note=>note.title === title ) ; 
    const dublicateNote  = notes.find(note => note.title === title)
    if(!dublicateNote){
        notes.push({
            title: title , 
            body: body 
        })
        console.log(chalk.green.inverse('Note Added Successfully'))
        saveNotes(notes) ;
    }else console.log(chalk.red.inverse('this title is taken!'))
}

// To Remove Note 
const removeNote = title=>{
    const notes = loadNotes(); 
    // My way to solve the problem 
    // const noteToDelete = notes.findIndex(note=> note.title === title )
    // if(noteToDelete >-1){
    //     notes.splice(noteToDelete , 1) ; 
    //     console.log(notes) ; 
    //     saveNotes(notes) ;
    // } 
    // else console.log('Not found') ; 
    
    const notesToKeep = notes.filter(note=>  note.title !== title ) ; 
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse(`remove Note`)) ; 
        saveNotes(notesToKeep) ; 
    } else console.log( chalk.red.inverse(` Nothing to do `) )
    
}

// To list he Notes 
const ListNotes = ()=>{
    const notes = loadNotes() ; 
    console.log(notes)
    for(let i = 0 ; i<= notes.length-1 ; i++){
        console.log( `Note no:${i+1}` ,chalk.blue.inverse(notes[i].title) )
    }
}
// Ti read specfic Note 
const readNote = title =>{
    const notes = loadNotes() ; 
    const findNote = notes.find(note=> note.title === title) ; 
    findNote ? console.log(chalk.green.inverse(findNote.title) , findNote.body): console.log('no note')
}




const saveNotes = notes =>{
    const dataJSON = JSON.stringify(notes) ; 
    fs.writeFileSync('notes.json' , dataJSON) ; 
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json') ; 
        const dataJSON = dataBuffer.toString() ; 
        return JSON.parse(dataJSON) ; 
    }catch(e){
        return [] ; 
    }
}


module.exports = {
    getNote: getNotes , 
    addNote: addNote , 
    removeNote: removeNote , 
    ListNotes: ListNotes ,
    readNote:readNote
}