import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: ${budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;

/*
Creating a new component called Remaining (line 3)
Using the Bootstrap Alert classes to gives us a green background (line 5)
Adding some text and hard coding a value (line 6)
Adding Spent so Far

If the user goes over budget, i.e the expenses are more than the budget, we want to display a red background (as opposed to a green background). 

Importing expenses and budget from Context (
Getting the total cost of the expenses using the reduce function 
Creating a variable to store the CSS classname we want to display (depending on if the user has gone over the budget or not)
Using a template string to create our classes
Rendering the remaining budget using a subtraction 
*/