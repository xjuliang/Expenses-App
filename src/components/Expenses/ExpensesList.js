import './ExpensesList.css';

import ExpenseItem from './ExpenseItem'


 const ExpensesList = props => {

  if (props.items.length === 0) {//if dont have an expense in that year
    return <h2 className="expenses-list__fallback"> No expenses found. </h2>
  }
  
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => ( // create a new expense for every element i received via props 
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
    )
}

export default ExpensesList;




