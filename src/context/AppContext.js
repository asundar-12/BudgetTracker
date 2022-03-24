import React, { useReducer, createContext} from 'react';
/*Creating a function which accepts the current state, and an action (line 1)
We use a switch based on the action.type to decide how to update the state (line 2)
For now since we’re just getting things set up we’re just going to return the default state, and add actions later as we need them (line 3)*/


/*Need to change the AppReducer to handle the action through a switch statement and update the state
RIeturn a new state object  with new expense taking from the payload*/
export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		/*Using filter array method to remove
		expense that has the ID which we received
		from the payload*/
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};

		case 'NEW_BUDGET':
			return {
				...state,
				budget: action.payload,
			};
		default:
			return state;
	}
};
//initial state: indicates the shape of our state(what properties and data we have)
//initializes app with data frrom API call
export const initialState = {
	budget: 5000,
	expenses: [
	],
};

//added a call to createContext
export const AppContext = createContext();

//App provider and useReducer hook store global state
export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

/*Creating our Provider component (line 12)
Setting up the useReducer hook which will hold our state, and allow us to update the state via dispatch (NOTE we haven't created the AppReducer yet! Line 13)
We're returning AppContext.Provider. This has a value prop which contains the data which we allow our components to see and have access to, as well as the dispatch function that lets us update the state by dispatching actions (line 16)*/