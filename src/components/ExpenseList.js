import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card'

function ExpenseList(props) {
    const itemList = props.itemList
    console.log(itemList)

    return (
        <Card className="expenses">
            <ExpenseItem title={itemList[0].title} date={itemList[0].date} price={itemList[0].price}></ExpenseItem>
            <ExpenseItem title={itemList[1].title} date={itemList[1].date} price={itemList[1].price}></ExpenseItem>
            <ExpenseItem title={itemList[2].title} date={itemList[2].date} price={itemList[2].price}></ExpenseItem>
      </Card>
    )

}


export default ExpenseList;