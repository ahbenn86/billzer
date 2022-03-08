import SingleExpense from "./components/SingleExpense";

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
        <SingleExpense />
        <SingleExpense />
        <SingleExpense />
        <SingleExpense />
      </div>
    </div>
  );
}

export default App;
