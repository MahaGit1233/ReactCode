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

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            {filteredExpenses.map((expense) => 
                (<ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                    location={expense.location}
                ></ExpenseItem>)
            )};
        </Card>
    );
}

export default Expenses;