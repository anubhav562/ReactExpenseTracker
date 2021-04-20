import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const addNewExpenseHandler = (expenseFormData) => {
        const newExpenseData = {
            ...expenseFormData,
            id: Math.random().toString()
        };

        console.log(newExpenseData);
        props.onAddExpense(newExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addNewExpenseHandler}></ExpenseForm>
        </div>
    )

}

export default NewExpense;