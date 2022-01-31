import { useState } from 'react';
import './ExpenseFoem.css' 

const ExpenseFoem = props =>{
    // states 
    // Multi State 
    const [title , setTitle] = useState('') ;
    const [amount , setAmount] = useState(1) ; 
    const [date , setDate] = useState('2021-05-05') ; 
    //Uni State 
    // const [userInput , setUserInput] = useState({
    //     title: '' , 
    //     amount: '' ,
    //     date: ''
    // }) ; 

    // Handlers 
    const titleChangeHandler = (e)=>{
        setTitle(e.target.value) ; 
        // setUserInput(()=> { reurn {...userInput , title: 'new value }}) -- in case of multi state
    }
    const amountChangeHandler = (e)=>{
        setAmount(e.target.value) ; 
 
    }
    const dateChangeHandler = (e)=>{
        setDate(e.target.value) ;          
    }

    // Handle Submition 
    const submitionHandler = (e)=>{
        e.preventDefault() ; 
        console.log('Submited')
        const expenseDate = {
            title: title , 
            amount: amount , 
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseDate)
        setTitle('')
        setAmount('')
        setDate('') 


        // UNI State 
        // setUserInput({
        //     title: e.target[0].value , 
        //     amount: e.target[1].value ,
        //     date: e.target[2].value
        // })
    }
 

    return (
        <form onSubmit={submitionHandler}> 
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label> Title </label> 
                    <input name='title' type='text' placeholder='Title'
                    onChange={titleChangeHandler}
                    value={title}
                    /> 
                </div>

                <div className='new-expense__control'>
                    <label> Amount </label> 
                    <input name='amount' type='number' placeholder='Price' min='1' step='0.5' 
                    onChange={amountChangeHandler}
                    value={amount}
                    /> 
                </div>

                <div className='new-expense__control'>
                    <label> Date </label> 
                    <input name='date' type='date' placeholder='Date' min='2020-01-01' max='2025-01-01'
                    onChange={dateChangeHandler}
                    value={date}
                    /> 
                </div>

            </div>

                 <div className='new-expense__actions'> 
                 <button type='button' onClick={props.onCancel}> Cancel</button>
                    <button name='submit' type='submit'>Add Expense</button> 
                 </div>
        </form>
    )
}
export default ExpenseFoem ; 