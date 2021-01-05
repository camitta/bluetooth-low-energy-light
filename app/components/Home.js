import React from 'react';
import { Link } from 'react-router-dom';
import light from '../../public/light.svg';
import path from 'path';

import styled from 'styled-components'
import Star from './Star';
const Svg = styled(Star);

// var path = document.getElementsByTagName('path')[0];
// Make sure your mouse cursor turns into a hand when over it, and gray it out
path.style = 'cursor:pointer;fill:#BBB';
// Now send commands to turn the LED on or off
var on = false;
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
		<img src={light} alt='star' />
	</div>
);

export default Home;
