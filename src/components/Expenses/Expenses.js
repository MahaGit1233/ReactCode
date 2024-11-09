import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2023');

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses=props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            <ExpenseChart filteredExpensesForChart={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;