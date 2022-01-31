const notes = [
     {  title: 'B note 1 ' , 
     body: 'description of note 1 ' , 
     } , 
     {title: 'C note 2 ' , 
     body: 'description of note 2 ' , 
     } ,
     { title: 'A note 3 ' , 
     body: 'description of note 3 ' , 
     }
] ;


// sort notes 
const sortNotes = notes => {
    return notes.sort( (firstNote , secNote) => {
        if(firstNote.title.toLowerCase() < secNote.title.toLowerCase()){
            return -1 ; 
        } else if(secNote.title.toLowerCase() < firstNote.title.toLowerCase()){
            return 1 
        } else return 0 
    })
}
console.log(sortNotes(notes))  ; 
//--------------------------------------------------------------------------
// filter notes 
const filterSearch = (notes , queary ) => {
    return  notes.filter((note , index) => {
        const isTitleMatch = note.title.toLowerCase().includes(queary.toLowerCase())  ; 
        const isBodyMatch  = note.body.toLowerCase().includes(queary.toLowerCase())
        return isTitleMatch || isBodyMatch ; 
    })
}
// const res = filterSearch(notes , 'of ' )
// console.log(res) ; 
//--------------------------------------------------------------------------
// findIndex method to search in array of objects 
// console.log(notes.length) 
// console.log(notes) 
// console.log(notes.findIndex((note , index)=>{
//     console.log(note) ; 
//     return note.title === 'note 3 '
// } )) 
//-----------------------------------------------------------------------
// const findNote = (notes , noteTitle) => {
//     return   notes.findIndex( (note , index) => {
//         return note.title === noteTitle ; 
//     })
    
// }


// console.log(findNote(notes , 'note 3 ' ))
//-----------------------------------------------------------------------








// notes.push('new note ' )   // Add to end 
// console.log(notes) ; 
// notes.pop()                // remove from the end
// console.log(notes) ; 


// notes.shift( )                      // remove from the  start  
// console.log(notes) ; 

// notes.unshift('start new note ' )   // Add to start 
// console.log(notes) ; 


// notes.splice(1 , 1) ;                           // remove item 
// console.log(notes) ;

// notes.splice(1 , 0 , ' Push new note 2 ') ;     // replace item with another 
// console.log(notes) ;

// notes.splice(1 ,  ' Push new note 2 ') ;       // replace item with another  
// console.log(notes) ;


