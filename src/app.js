const express = require('express');
const morgan = require('morgan');
const { join } = require('path');
// const Bluetooth = require('node-web-bluetooth');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

const app = express();

module.exports = app;

//Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Request/Response Logging
app.use(morgan('dev'));

//Webpack Dev Middleware
const compiler = webpack(webpackConfig);
app.use(
	middleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		writeToDisk: true
	})
);

//static file-serving middleware
app.use(express.static(join(__dirname, '../public')));

app.use('/api', require('./routes'));

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});
