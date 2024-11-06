import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const dropDownChangehandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

return (
    <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label htmlFor="filter">Filter by Year</label>
            <select value={props.selected} id="filter" onChange={dropDownChangehandler}>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
                <option value='2026'>2026</option>
            </select>
        </div>
    </div>
);
}

export default ExpenseFilter;