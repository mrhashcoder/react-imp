import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
		<Router>
			{/* <Route exact path="/" component={Home} /> */}
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			<Redirect to="/login" />
		</Router>
  );
}

export default App;
