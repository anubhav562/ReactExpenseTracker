import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setTitle] = useState('')
    const [enteredPrice, setPrice] = useState('')
    const [enteredDate, setDate] = useState('')
    

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const formData = {
            title: event.target[0].value,
            price: event.target[1].value,
            date: event.target[2].value
        };
        console.log(formData);
        setTitle('');
        setPrice('');
        setDate('');
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={10} onChange={priceChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  max="2021-02-02"  value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm;
