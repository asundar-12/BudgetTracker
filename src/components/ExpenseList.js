
import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
function getCurrentDate(separator='-'){

	let newDate = new Date()
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	
	return `${month}${separator}${day}${separator}${year}`
	}
const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			
			filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
		setfilteredExpenses(searchResults);
	};

	

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
						date={getCurrentDate()}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
// /*his component will be in charge of taking a list of expenses, and rendering an ExpenseItem component for each item.*/

// import React from 'react'
// import ExpenseItem from './ExpenseItem';
// import { AppContext } from '../context/AppContext';
// import { useContext } from 'react';
// /*Adding a dummy list of expenses. For each expense we need an ID, a name, and a cost. Later, we'll take this list from context (line 4)*/
// const ExpenseList = () => {
//     const { expenses } = useContext(AppContext);

// /*Using the map function to iterate over the expenses and displaying an ExpenseItem component (we haven't created this yet! Line 12)*/
//     return (
// 		<ul className='list-group'>
// 			{expenses.map((expense) => (
// 				<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
// 			))}
// 		</ul>
//     )
// 		/* Passing the ID, name, and cost to the ExpenseItem component as props*/
    
// }

// export default ExpenseList
