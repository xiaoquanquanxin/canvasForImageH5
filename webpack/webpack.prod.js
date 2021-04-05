const webpackConfig = require('./webpack.config');
console.log('我是prod🍉');
const {merge} = require('webpack-merge');
module.exports = merge({
    mode: 'production',
}, webpackConfig);


