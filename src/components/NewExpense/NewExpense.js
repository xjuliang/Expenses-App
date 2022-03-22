import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false); //state for the button add expense

  const saveExpenseDataHandler = (enteredExpenseData) => { //when i want to save a new expense
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //create the new expense with the data
    setIsEditing(false); //close the form
  };

  const startEditingHandler = () => {
    //when the button is pressed:
    setIsEditing(true); //change the value of the state to true
  };

  const stopEditingHandler = () => {
    //button to close the form
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* depending on the state i return what is required */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler} /* i send the function to close the form via props */
        />
      )}
    </div>
  );
};

export default NewExpense;
