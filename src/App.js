import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expense=[
  {id:1, date: new Date(2023, 7, 15), title: 'Insurance', price: 50},
  {id:2, date: new Date(2024, 3, 25), title: 'Book', price: 20},
  {id:3, date: new Date(2024, 10, 11), title: 'Pen', price: 5},
  {id:4, date: new Date(2025, 1, 14), title: 'Laptop', price: 200},
];

const App = () => {
  const [expenses,setExpenses]=useState(Dummy_Expense);
  
  const saveNewExpenseDataHandler = (enteredNewExpensedata) => {
    setExpenses((prevState)=> [...prevState,enteredNewExpensedata]);
  }

  return (
    <div>
      <NewExpense onSaveNewExpenseData={saveNewExpenseDataHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
