
const server = require('./src/app');

const PORT = 3000;

const init = () => {
	try {
		server.listen(PORT, () => console.log(blue('Listening on http://localhost:3000')));
	} catch (err) {
		console.log(red(`There was an error starting up!`, err));
	}
};

init();
