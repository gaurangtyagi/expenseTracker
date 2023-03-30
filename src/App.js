import React,{ useState } from 'react';
import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 110,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 17994.9, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 2946.70,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expenses) =>{
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
