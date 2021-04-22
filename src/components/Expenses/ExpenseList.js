import React, {useState} from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const ExpenseList = (props) => {
    const itemList = props.itemList
    const [dropDownValue, setDropDownValue] = useState('')

    const filterExpensesByDropDownYear = (year) => {
        return function(expenseObject) {
            return expenseObject.date.getFullYear() == year
        }
    }

    const saveDropDownValueHandler = (dropDownData) => {
        setDropDownValue(dropDownData)
    }

    const filteredItemList = itemList.filter(filterExpensesByDropDownYear(dropDownValue))
    console.log(filteredItemList)

    return (
            <Card className="expenses">
                <ExpensesFilter onDropDownChange={saveDropDownValueHandler}/>
                {filteredItemList.map(item => { return <ExpenseItem title={item.title} date={item.date} price={item.price} />})}
            </Card>
    )

}


export default ExpenseList;