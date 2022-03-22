import { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {//save the filtered expenses in a new array
    return expense.date.getFullYear().toString() === filteredYear; //compare the year of the expense with the year of the filter
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/> 
        <ExpensesList items={filteredExpenses}/> {/* i send the expenses that have been filtrated via props */}
      </Card>
    </div>
  );
};

export default Expenses;
