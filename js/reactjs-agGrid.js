import React from 'react';
import ReactDOM from 'react-dom';


import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';

import Main from './components/Main.jsx';
import Home from './components/home.jsx';
import Grid from './components/grid.jsx';
import About from './components/about.jsx';


// import react router deps
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';


ReactDOM.render((

	    <Router history={browserHistory}>
			<Route path = "/" component = {Main}>
				<IndexRoute component = {Home} />
				<Route path = "grid" component = {Grid} />
				<Route path = "about" component = {About} />
			</Route>
		</Router>

), document.getElementById('wrapper'));