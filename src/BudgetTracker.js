import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import {BrowserRouter as Router, Routes, Route, withRouter} from 'react-router-dom';




const BudgetTracker = () => {
	
	return (
			<AppProvider>
		
				<div className='container'>
					<h1 style={{color:"white", background: "black", display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>My Budget Planner</h1>
					
					<h3 className='mt-3'>Add Expense</h3>
					<div className='row mt-3'>
						<div className='col-sm'>
							<AddExpenseForm />
						</div>
					</div>
					<h3 className='mt-3'>Expenses</h3>
					<div className='row mt-3'>
						<div className='col-sm'>
							<ExpenseList />
						</div>
					</div>
					<div className='row mt-3'>
						<div className='col-sm'>
							<Budget />
						</div>
						<div className='col-sm'>
							<Remaining />
						</div>
						<div className='col-sm'>
							<ExpenseTotal />
						</div>
					</div>
				</div>
			</AppProvider>
	);
};

export default BudgetTracker;
// export default withRouter(App);
/*
imports the bootstrap CSS into our project
Creates a component that displays "Hello React!" with paragraph tags
Exports this component so other components can use it */

/*Importing our different components (lines 3-5)
Adding a bootstrap container that helps us center our App on the page (line 9)
Adding a title (line 9)
Adding a Bootstrap row (line 10)
Adding a column within the row for each of our components so far (lines 12-20)*/