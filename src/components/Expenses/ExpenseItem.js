import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate calenderDate={props.date}></ExpenseDate>
                <div className='expense-item__location'>{props.location}</div>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.price}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;