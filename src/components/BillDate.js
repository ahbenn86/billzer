import React from "react";
import './BillDate.css';

function BillDate(billData) {

  const month = billData.date.toLocaleString("en-us", { month: "long" });
  const day = billData.date.toLocaleString("en-us", { day: "2-digit" });
  const year = billData.date.getFullYear();

  return (
    <div className="bill-date">
    <div className="bill-date__month"> {month}</div>
    <div className="bill-date__day">{day}</div>
    <div className="bill-date__year">{year}</div>
  </div>
  );
}

export default BillDate;
