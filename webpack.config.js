const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		app: './src/index.ts'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.html', '.js','json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			}, {
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'html-loader'
			}, {
				test: /\.(png|jpg|jpeg|gif)$/,
				use: 'file-loader'
			}, {
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: 'file-loader'
			}, {
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './html/index.html'
		})
	]
};