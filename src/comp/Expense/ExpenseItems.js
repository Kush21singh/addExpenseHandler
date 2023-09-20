import React, { useState } from 'react';
import '../Expense/ExpenseItems.css';
import ExpenseDate from '../Expense/ExpenseDate';
import ExpenseDetails from '../Expense/ExpenseDetails';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount); // Add state for amount
    console.log('ExpenseItem evaluated by React');

    const clickHandler = ()  => {
        setTitle('Updated!');
        console.log(title);    
    };

    const changeAmountHandler = () => {
        setAmount(100); // Change the expense amount to $100
    };

    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date} /> 
          <ExpenseDetails
            title={props.title}
            amount={amount} 
            location={props.location}
          /> 
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={changeAmountHandler}>Change Amount to $100</button> 
    </div>
  );
}

export default ExpenseItem;
