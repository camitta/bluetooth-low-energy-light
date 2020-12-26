import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

render(<App />, document.getElementById('app'));
