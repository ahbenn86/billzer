import './SingleBill.css';
import BillDate from './BillDate';

function SingleBill(billData) {
  

  return (
    <div className="single-bill">
      <BillDate date={billData.date}/>
      <div className="single-bill__title">
        <h2>{billData.title}</h2>
      </div>
      <div className="single-bill__total">${billData.amount}</div>
    </div>
  );
}

export default SingleBill;
