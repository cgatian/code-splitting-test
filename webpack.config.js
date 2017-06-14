
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: {
        main: "./src/main.ts",
       // main2: "./test-package/index.ts"
    },
   // devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new CheckerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks:  (module, count) => {
                return module.resource && (/node_modules/).test(module.resource);
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "webpack",
            minChunks: Infinity
        })
    ],
    recordsOutputPath: path.join(__dirname, "js", "records.json")
};