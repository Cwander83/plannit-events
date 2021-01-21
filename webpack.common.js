const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' },
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.docx$/,
				use: [
					{
						loader: 'docx-loader',
						options: {
							removeLinks: true,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
			{ test: /\.txt$/, use: 'raw-loader' },
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'tailwind.css',
			chunkFilename: 'tailwind.css',
		}),

		new webpack.SourceMapDevToolPlugin({}),
	],
};
