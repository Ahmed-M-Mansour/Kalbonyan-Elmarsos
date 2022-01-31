import './NewExpense.css' ; 
import ExpenseFoem from '../ExpenseFoem/ExpenseFoem';
import { useState } from 'react/cjs/react.development';

const NewExpense = props =>{

   const [isEditing , setIsEditing] = useState(false) ; 
    const saveExpenseData = (enteredData)=>{
        const expenseData =  {
                ...enteredData , 
                id: Math.random().toString() 
               }
               props.onAddNewExpense(expenseData)
    }
    const startEditingHandler = ()=> setIsEditing(true)
    const stopEditingHandler = ()=> setIsEditing(false)
    return (
            <div className='new-expense'> 
            {!isEditing && <button onClick={startEditingHandler} > Add New Expense </button> }
            {isEditing && <ExpenseFoem 
                onSaveExpenseData={saveExpenseData}
                onCancel={stopEditingHandler}
                 /> }
            </div>
        )
}
export default NewExpense ; 