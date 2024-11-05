import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2023');

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses=props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent=<p>No expenses found</p>;

    if (filteredExpenses.length===1) {
        expensesContent=(
            <div>
                <ExpenseItem
                    key={filteredExpenses[0].id}
                    date={filteredExpenses[0].date}
                    title={filteredExpenses[0].title}
                    price={filteredExpenses[0].price}
                    location={filteredExpenses[0].location}
                />
                <p>Only one expense found. Please add more</p>
            </div>
        );
    } else if (filteredExpenses.length>1) {
        expensesContent=filteredExpenses.map((expense) => 
            (<ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.price}
                location={expense.location}
            ></ExpenseItem>)
        );
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            {expensesContent}
        </Card>
    );
}

export default Expenses;