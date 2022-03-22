import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]); //a state because i want to reaload the page if i input a new expense

  const addExpenseHandler = (expense) => { //in case i receive an expense:
    setExpenses((prevExpenses) => {//update the expenses and  prevExpenses fot not losing the ones i already have
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
