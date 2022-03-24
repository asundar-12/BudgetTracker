import logo from './logo.svg';
import './App.css';
import Home from './Home';
import BudgetTracker from './BudgetTracker';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/BudgetTracker" element = {<BudgetTracker />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
