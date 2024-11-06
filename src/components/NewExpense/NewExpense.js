import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const enteredData={...enteredExpenseData,id:Math.random().toString()};
        props.onSaveNewExpenseData(enteredData);
        setIsEditing(false);
    };
    const [isEditing,setIsEditing] = useState(false);

    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={() => {
                setIsEditing(true);
            }}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={() => {
                setIsEditing(false);
            }}/>}
        </div>
    );
}

export default NewExpense;