const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const inlineSourceMap = require('inline-source-map');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
	//environment mode
	mode: 'development',

	// Entry point of app
	entry: resolveAppPath('app'),

	output: {
		// Development filename output
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		// Serve index.html from public as the base
		contentBase: resolveAppPath('public'),

		// Enable compression
		compress: true,

		// Enable hot reloading
		hot: true,

		host,

		port: 8080,

		// Public path is root of content base
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: resolveAppPath('app'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ require.resolve('babel-preset-react-app') ]
					}
				}
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// Re-generate index.html with injected script tag.
		// The injected script tag contains a src value of the
		// filename output defined above.
		new HtmlWebpackPlugin({
			inject: true,
			template: resolveAppPath('public/index.html')
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser'
		})
	]
};
