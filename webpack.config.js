var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var path = require('path');
var _root = path.resolve(__dirname);

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = {
    entry: {
        app: root('imports.ts'),
    },
    output: {
        path: root('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [            
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: 'source-map-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: root(''),
        historyApiFallback: true,
        compress: true,
        port: 4000
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here 
        })
    ]
};
