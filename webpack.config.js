const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV != 'production';

module.exports = {
	entry: './frontend/app.js',
	output: {
		path: path.join(__dirname,'/backend/public/'),
		filename: 'js/bundle.js'
	},
	mode: 'production',

	module: {
		rules: [
				{
					test: /\.css/,
					use: [ 
						devMode ? 'style-loader' : miniCssExtractPlugin.loader,'css-loader']
				}
			]
		},

	plugins: [
			new htmlWebpackPlugin({
				template: './frontend/index.html',
				minify: {
					collapseWhitespace: true,
					removeComents: true,
					removeRedundantTypeAttributes: true,
					removeStyleLinkAttributes: true,
					useShortDoctype:true
				}
			}),
			new miniCssExtractPlugin({
				filename: 'css/bundle.css'
			})
	],
	devtool: 'source-map'
}