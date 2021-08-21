import Expense from "./component/Expense";
function App() {
  const expense = [
    { title: "Audio", amount: 234, date: new Date(2021, 3, 21) },
    { title: "Fourtuner", amount: 2367, date: new Date(2020, 9, 11) },
    { title: "Suzuki", amount: 23897, date: new Date(2019, 4, 161) },
    { title: "Honda", amount: 4356, date: new Date(2021, 7, 17) },
  ];
  return (
    <>
      <h1>let's get started</h1>
      <Expense item={expense} />
    </>
  );
}

export default App;
