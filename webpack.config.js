var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public/static/js');

module.exports = {
    entry: './js_src/main.js',
    output: { path: BUILD_DIR, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
