import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
    return <div>
        <Chart chartExpenses={props.filteredExpensesForChart} />
    </div>
}

export default ExpenseChart;