import { useState } from 'react/cjs/react.development';
import './Expenses.css' ; 
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import Card from '../Card/Card';
import ExpensesChart from '../ChartComponent/ExpensesChart ';

const Expenses = props =>{


    const [filteredYear , setFilteredYear] = useState('')
    // to get the filter of the year from the ExpensesFilter Component 
    const filterExpenses = (filteredExpenses) => setFilteredYear(filteredExpenses)
          // to filter the displayed data 
     const displayFiltiredExpeses =  props.expenses.filter(
            expense=>expense.date.getFullYear().toString() === filteredYear)
  
    return(
        <Card className='expenses'> 
        <ExpensesFilter
        OnFilterExpenses={filterExpenses}
        selected={filteredYear}
        /> 
        <ExpensesChart expenses={displayFiltiredExpeses} />
        <ExpensesList items={displayFiltiredExpeses}/> 
        </Card>
    )
}
export default Expenses ; 

  
        // <ExpenseItem
        //   title={expenses[0].title}
        //   amount={expenses[0].amount}
        //   date={expenses[0].date}
        //   />
  
        // <ExpenseItem
        //   title={expenses[1].title}
        //   amount={expenses[1].amount}
        //   date={expenses[1].date}
        //   />
  
        // <ExpenseItem
        //   title={expenses[2].title}
        //   amount={expenses[2].amount}
        //   date={expenses[2].date}
        //   />
  
        // <ExpenseItem
        //   title={expenses[3].title}
        //   amount={expenses[3].amount}
        //   date={expenses[3].date}
        // />
        