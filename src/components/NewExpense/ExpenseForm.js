import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
//    const [enteredTitle,setEnteredTitle] = useState("");
  //  const [enteredAmount,setEnteredAmount] = useState("");
    //const [enteredDate,setenteredDate] = useState("");

    const [userInput,setUserInput] = useState({
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:"",
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,enteredTitle:event.target.value,
            };
        });
        //setEnteredTitle(event.target.value); 
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,enteredAmount:event.target.value,
            };
        });
        //setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,enteredDate:event.target.value,
            };
        });
        //setenteredDate(event.target.value);
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