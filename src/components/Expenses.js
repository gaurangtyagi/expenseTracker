import React, { useState } from 'react';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import ExpensesChart from './ExpensesChart';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return (expense.date.getFullYear().toString() === filteredYear);
    });

      return <div>
        <div className='expenses'>
        <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
        <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
        <ExpensesList items = {filteredExpenses}></ExpensesList>
        </div>
      </div>
}

export default Expenses;