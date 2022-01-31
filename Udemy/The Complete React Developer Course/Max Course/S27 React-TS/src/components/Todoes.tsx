import React from 'react' ; 
import Todo from './Todo';
import TodoItem from './TodoItem'
const Todoes: React.FC<{ittems: Todo[]}> = (props) => {
        
    return <ul>
        {props.ittems.map(item => <TodoItem text={item.text} key={item.id} />  )}
        
    </ul>
}

export default Todoes 