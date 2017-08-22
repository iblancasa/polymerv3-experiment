const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		"./src/iblancasa-component.js"
	],
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "components.js",
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: "src/index.html",
			to: "."
		}])
	],
	module: {
		rules: [{
			loader: 'babel-loader'
		}]
	}
}
