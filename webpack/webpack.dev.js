const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { distPath } = require('./const');
console.log('我是dev🍉');
module.exports = merge({
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: distPath,
        compress: true,
        hot: true,
        host: '192.168.0.102',
        port: 9000,
    },
}, webpackConfig);


