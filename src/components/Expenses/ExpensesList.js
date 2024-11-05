import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found</h2>
    }

    if (props.items.length === 1) {
        return (
            <ul className="expenses-list">
                <ExpenseItem
                    key={props.items[0].id}
                    date={props.items[0].date}
                    title={props.items[0].title}
                    price={props.items[0].price}
                    location={props.items[0].location}
                />
                <p className="expenses-list__fallback">Only one expense found. Please add more</p>
            </ul>
        );
    }
    else if (props.items.length > 1) {
        return (
            <ul>
                {props.items.map((item) => {
                    return (<ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        price={item.price}
                        location={item.location}
                    />)
                }
                )}
            </ul>
        );
    }
}

export default ExpensesList;