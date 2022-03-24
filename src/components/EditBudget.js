import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);

	function checkNegative(){
		var text = value;
		if(text<0){
			text = 0;
		}

		this.useState({value: text});
		
		
	}
	
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				min = "0"
				oninput  = "validity.valid||(value='');"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;