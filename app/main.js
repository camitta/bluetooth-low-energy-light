import React from 'react';
import Theme from './components/Theme.jsx';
import styled from 'styled-components';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => (
	<Theme>
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</Theme>
);

render(<App />, document.getElementById('app'));
