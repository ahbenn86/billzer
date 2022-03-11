import './SingleExpense.css';
import ExpenseDate from './ExpenseDate';

function SingleExpense(billData) {
  

  return (
    <div className="single-expense">
      <ExpenseDate date={billData.date}/>
      <div className="single-expense__title">
        <h2>{billData.title}</h2>
      </div>
      <div className="single-expense__total">${billData.amount}</div>
    </div>
  );
}

export default SingleExpense;
