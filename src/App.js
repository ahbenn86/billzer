import SingleBill from "./components/SingleBill";

import "./App.css";

function App() {
  const bills = [
    {
      id: "b1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "b2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "b3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "b4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="header">
      <h1>Billzer</h1>
      <div>
        <SingleBill
          title={bills[0].title}
          amount={bills[0].amount}
          date={bills[0].date}
        />
      </div>
      <div>
        <SingleBill
          title={bills[1].title}
          amount={bills[1].amount}
          date={bills[1].date}
        />
      </div>
      <div>
        <SingleBill
          title={bills[2].title}
          amount={bills[2].amount}
          date={bills[2].date}
        />
      </div>
      <div>
        <SingleBill
          title={bills[3].title}
          amount={bills[3].amount}
          date={bills[3].date}
        />
      </div>
    </div>
  );
}

export default App;
