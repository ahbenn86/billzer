import React from "react";
import './ExpenseDate.css';

function ExpenseDate(billData) {

  const month = billData.date.toLocaleString("en-us", { month: "long" });
  const day = billData.date.toLocaleString("en-us", { day: "2-digit" });
  const year = billData.date.getFullYear();

  return (
    <div className="expense-date">
    <div className="expense-date__month"> {month}</div>
    <div className="expense-date__day">{day}</div>
    <div className="expense-date__year">{year}</div>
  </div>
  );
}

export default ExpenseDate;
