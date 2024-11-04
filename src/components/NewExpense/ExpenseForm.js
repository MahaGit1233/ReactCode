import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setenteredDate] = useState("");

//    const [userInput,setUserInput] = useState({
  //      enteredTitle:"",
  //      enteredAmount:"",
    //    enteredDate:"",
   // });

    const titleChangeHandler = (event) => {
    //    setUserInput((prevState)=>{
      //      return {
        //        ...prevState,enteredTitle:event.target.value,
          //  };
       // });
        setEnteredTitle(event.target.value); 
    };

    const amountChangeHandler = (event) => {
//        setUserInput((prevState)=>{
  //          return {
    //            ...prevState,enteredAmount:event.target.value,
      //      };
        //});
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
//        setUserInput((prevState)=>{
  //          return {
    //            ...prevState,enteredDate:event.target.value,
      //      };
        //});
        setenteredDate(event.target.value);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate,
        };
        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setenteredDate("");
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={enteredDate} min="2023, 01, 01" max="2024, 12, 31" id="date" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>  
    );
}

export default ExpenseForm;