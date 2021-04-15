import ExpenseItem from './components/ExpenseItem';

function App() {

  const itemList = [
    {
      title: 'Groceries',
      date: new Date(2020, 3, 13),
      price: 130.65 
    },
    {
      title: 'Petrol',
      date: new Date(2020, 3, 15),
      price: 67.78 
    },
    {
      title: 'Mobile Plan',
      date: new Date(2020, 3, 18),
      price: 55.56 
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={itemList[0].title} date={itemList[0].date} price={itemList[0].price}></ExpenseItem>
      <ExpenseItem title={itemList[1].title} date={itemList[1].date} price={itemList[1].price}></ExpenseItem>
      <ExpenseItem title={itemList[2].title} date={itemList[2].date} price={itemList[2].price}></ExpenseItem>
    </div>
  );
} 

export default App;
