var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app:path.join(__dirname, 'app/login'),
        vendors: ['react','redux']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['react','es2015']
                }
            },
			{
				test: /\.scss/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel?presets[]=react,presets[]=es2015'
			}
        ]
    },
    plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("global.css", []),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
