import { useState } from 'react'
import ExpenseList from './components/Expenses/ExpenseList'
import NewExpense from './components/NewExpense/NewExpense'


const ITEM_LIST = [
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

const App = () => {

  const [itemList, setItemList] = useState(ITEM_LIST)

  const addNewExpensetoListHandler = (Expense) => {
    console.log(Expense)
    setItemList(prevItemList => {return [...prevItemList, Expense]})
  } 


  return (
    <div>
      <NewExpense onAddExpense={addNewExpensetoListHandler}/>
      <ExpenseList itemList={itemList}/>
    </div>
  );
} 

export default App;
