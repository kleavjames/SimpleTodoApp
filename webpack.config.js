const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'client'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: path.resolve(__dirname, 'client')
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './client/index.html',
                filename: 'index.html',
                inject: 'body'
            }
        )
    ]
};
