import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<br>
			</br>
			{props.date}
			<div>	 
				<span className='badge bg-primary badge-pill mr-3'>
					${props.cost}
					
				</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;
/*
Importing dispatch from Context, which allows us to dispatch a delete action (line 6)
Creating a function that gets called when the delete icon is clicked (line 8)
Dispatching an action. Our action contains the type (so the reducer knows how to update the state) and the payload. In this case we're passing the ID of this expense (which we get from props when we rendered the ExpenseList)
This does not make the reducer update the sate yet, we have to do it in AppContext.js (line 9)
*/