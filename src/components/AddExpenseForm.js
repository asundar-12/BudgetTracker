import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
	var today = new Date(),

	today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	// const {currState, setCurrState} = useState({name: "", cost: ""});
	// const{name, cost} = currState;
	
	//on submit function that acts upon button
	const onSubmit = (event) => {
		event.preventDefault();

		/* creating an expense object called 
		expense with
		a uuid identification*/
		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};
		/*dispatching action with type and payload.
		payload is the expense object. type tells you
		how to update the state*/
		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		
	};
	// useEffect(()=>{
	// 	const useS = JSON.parse(localStorage.getItem("expense"));
	// 	if(name === "" && password === ""){
		
	// 	}
	// }
	// useEffect(()=>{
	// 	localStorage.setItem("expense", JSON.stringify(currState))
	// },[name, cost]);
	
	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					
					></input>
				</div>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;