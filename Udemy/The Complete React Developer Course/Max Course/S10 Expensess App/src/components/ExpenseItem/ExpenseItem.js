import { useState } from 'react';
import ExoenseDate from '../ExoenseDate/ExpenseDate'
import Card from '../Card/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) =>{
  const [title , setTitle]  = useState(props.title) ; 
   
    return (
      <li> 
      <Card className='expense-item'>
       <ExoenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
      </li>
    );
}

export default ExpenseItem ; 