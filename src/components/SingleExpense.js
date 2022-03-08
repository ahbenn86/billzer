import './SingleExpense.css';

function SingleExpense() {

    const billDate = new Date(2022, 3, 2022);
    const billTitle = 'Car insurance';
    const billAmount = 294.67;

  return (
    <div className="single-expense">
      <div className="single-expense__date">{billDate.toISOString()}</div>
      <div className="single-expense__title">
        <h2>{billTitle}</h2>
      </div>
      <div className="single-expense__total">${billAmount}</div>
    </div>
  );
}

export default SingleExpense;
