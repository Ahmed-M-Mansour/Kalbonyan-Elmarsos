import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const dumyExpenses = [{
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }]

    const [expenses , setExpenses] = useState(dumyExpenses)

    const addNewExpense = (newExpense)=>{
      // dumyExpenses.push(newExpense)
      // console.log(dumyExpenses)
      setExpenses(prevExpenses => [ newExpense , ...prevExpenses  ] )
      console.log(expenses)
    }

  return (
    <div>
    <NewExpense onAddNewExpense={addNewExpense}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;