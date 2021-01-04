import React from 'react';
import { Link } from 'react-router-dom';
import light from '../../public/light.svg';
import path from 'path';

let on = false;
// path.addEventListener('click', function() {
// 	on = !on;
// 	if (on) {
// 		path.style.fill = 'red';
// 		Puck.write('LED1.set();\n');
// 	} else {
// 		path.style.fill = '#444';
// 		Puck.write('LED1.reset();\n');
// 	}
// });

const Home = () => (
	<div>
		<img src={light} alt='' />
	</div>
);

export default Home;
