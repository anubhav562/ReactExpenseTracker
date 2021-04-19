import ExpenseList from './components/Expenses/ExpenseList'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {

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
      <NewExpense />
      <ExpenseList itemList={itemList}/>
    </div>
  );
} 

export default App;
