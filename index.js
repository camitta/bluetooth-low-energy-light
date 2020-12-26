import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

render(<App />, document.getElementById('app'));
