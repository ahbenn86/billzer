import React from "react";
import './Bills.css'
import SingleBill from './SingleBill'

function Bills(billData) {
  return (
    <div className="header">
      <div>
        <SingleBill
          title={billData.items[0].title}
          amount={billData.items[0].amount}
          date={billData.items[0].date}
        />
      </div>
      <div>
        <SingleBill
          title={billData.items[1].title}
          amount={billData.items[1].amount}
          date={billData.items[1].date}
        />
      </div>
      <div>
        <SingleBill
          title={billData.items[2].title}
          amount={billData.items[2].amount}
          date={billData.items[2].date}
        />
      </div>
      <div>
        <SingleBill
          title={billData.items[3].title}
          amount={billData.items[3].amount}
          date={billData.items[3].date}
        />
      </div>
    </div>
  );
}

export default Bills;
