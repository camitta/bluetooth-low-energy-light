import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div>
		<p>Click to route to "/oops" which isn't a registered route:</p>
		<Link to='/oops'>Let's go</Link>
	</div>
);

export default Home;
