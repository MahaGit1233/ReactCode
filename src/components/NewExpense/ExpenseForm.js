import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setenteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.title.value); 
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.amount.value);
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.date.value);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" min="2023, 01, 01" max="2024, 12, 31" id="date" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>  
    );
}

export default ExpenseForm;