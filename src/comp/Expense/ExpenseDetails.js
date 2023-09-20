import React from 'react';


const ExpenseDetails = (props) => {
  return (
    <div className='expense-details'>
      <div className='expense-details__title'>{props.title}</div>
      <div className='expense-details__amount'>${props.amount.toFixed(2)}</div>
      <div className='expense-details__location'>{props.location}</div>
    </div>
  );
};

export default ExpenseDetails;
