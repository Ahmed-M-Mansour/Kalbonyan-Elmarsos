const todoes = [
    {
        text: 'Alasr praer' ,
        complete: true 
    } , 
    {
        text: 'fnish Array section' ,
        complete: false 
    } , 
    {
        text: 'project' ,
        complete: true 
    } , 
    {
        text: 'go to sleep early ' ,
        complete: true 
    } , 
]


// sort array 
const sortTodos = todos => {
        return todoes.sort( (firstTodo , secTodo) => {
            if(firstTodo.complete && !secTodo.complete  ) {
                return -1
            }
            else if(!firstTodo.complete && secTodo.complete ){
                return 1
            } else return 0 ; 
        }  )
    }
//sort ny name 
// const sortTodos = todos => {
//     return todoes.sort( (firstTodo , secTodo)   => {
//         if(firstTodo.text.toLowerCase() < secTodo.text.toLowerCase()){
//             return -1 ; 
//         }  else if(secTodo.text.toLowerCase() < firstTodo.text.toLowerCase()){
//             return 1 ; 
//         } else return 0 ; 
//     })
// }
console.log(sortTodos(todoes)) ; 



// // filter todos 
const getThingsTodo = todos => {
    return todoes.filter(todo => {
        // return todo.complete === false ; 
        return ! todo.complete ;  
    })
}
// console.log(getThingsTodo(todoes))
//--------------------------------------------------------------------

// find object index and delete it 
const deleteTodo = (todoes , textToDelete )  => {
    const index =  todoes.findIndex( (todo , index) => {
        return todo.text.toLowerCase() == textToDelete.toLowerCase()
    })  
    if(index > -1 ){
     todoes.splice(index , 1 ) 
     console.log(` Dlete index: ${index} `)
    }
    else console.log(' not found this index ')
}


// console.log(deleteTodo(todoes , ' project') )
// console.log(todoes)
//---------------------------------------------------------------------------------------

// console.log(` Yoe have ${todos.length} Tasks Today`) ;  

// console.log(todos[0]) 
// console.log(todos[1]) 
// console.log(todos[todos.length -1 ]) 


// todos.splice(2 , 1 ) ;      // remove 3rd item 
// console.log(todos)

// todos.push(` don't forget to to decrease the usage of mobile `) ; 
// console.log(todos)

// todos.shift() ; 
// console.log(todos)
//--------------------------------------------------------------------------
// todos.forEach( (item , index ) => {
//     console.log(` item  Number ${index +1 } is:  ${item} `);
// });

// console.log('-----------------------------------------')

// for(let i = 0 ; i < todos.length ; i++){
//     console.log( ` ${i+1}: ${todos[i]}`) ; 
// }