import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map((expense) => {
                return (<ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                    location={expense.location}
                ></ExpenseItem>);
                })};
        </div>
    );
}

export default Expenses;