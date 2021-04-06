const path = require('path');
console.log('🍉');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {distPath} = require('./const');
module.exports = {
    entry: './src/index',
    output: {
        path: distPath,
        filename: 'canvas.bundle.js'
    },
    //  loader
    module: {
        rules: [
            {test: /\.(tsx?|ts)$/, loader: 'ts-loader'},
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    //  插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/favicon.ico',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js',],
        alias: {
            '@img': path.resolve(__dirname, '../src/img/'),
            '@audio': path.resolve(__dirname, '../src/audio/'),
            '@ts': path.resolve(__dirname, '../src/ts/'),
        },
    },
};

