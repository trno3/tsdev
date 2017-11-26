"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
exports.default = {
    devtool: "#source-map",
    entry: {
        vendor: path.resolve(__dirname, "src/vendor"),
        main: path.resolve(__dirname, "src/index")
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].[chunkhash].js"
    },
    plugins: [
        new ExtractTextPlugin("[name].[contenthash].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            trackJSToken: "25523effd4174052af876dd94235426a"
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {}
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    }
};
//# sourceMappingURL=webpack.config.prod.js.map