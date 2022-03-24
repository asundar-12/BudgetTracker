import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-primary'>
			<span>Spent so far: ${totalExpenses}</span>
		</div>
	);
};

export default ExpenseTotal;

/*Creating a new component called ExpenseTotal (line 3)
Using the Bootstrap Alert classes to gives us a blue background (line 5)
Adding some text and hard coding a value (line 6)

Taking expenses from the state
Displaying the variable*/