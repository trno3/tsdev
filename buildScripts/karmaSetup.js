"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports = function (config) {
    config.set({
        basePath: "../",
        frameworks: ["jasmine"],
        preprocessors: {
            "src/*.spec.js": ["babel", "webpack"],
        },
        files: ["src/**/*.spec.js", "node_modules/**/*"],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity,
        webpack: {
            devtool: "#inline-source-map",
            devServer: {
                noInfo: false
            },
            entry: [path.resolve(__dirname, "src/index")],
            target: "web",
            output: {
                path: path.resolve(__dirname, "src"),
                publicPath: "/",
                filename: "bundle.js"
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "src/index.html",
                    inject: true,
                    debug: true
                })
            ],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {}
                        }
                    }
                ]
            }
        }
    });
};
//# sourceMappingURL=karmaSetup.js.map