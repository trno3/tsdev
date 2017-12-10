var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

var config = {
   devtool: 'inline-source-map',
   entry: {
      vendor: './src/vendor.ts',
      app: './src/main.ts'
   },
   target: 'web',
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
   },
   resolve: {
      extensions: ['.ts', '.js']
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "src/index.html",
         inject: true,
         debug: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
         name: "vendor"
      }),
      new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client'))
   ],
   module: {
      rules: [
         {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: [/test/, /node_modules/]
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'style-loader!css-loader',
               }
            ]
         }
      ]
   }
};

module.exports = config;



// const path = require('path');

// // //const HtmlWebpackPlugin = require("html-webpack-plugin");

// const config = {
//    entry: './src/index.js',
//    target: 'web',
//    output: {
//       filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist')
//    },
// };

// module.exports = config;

// // module.exports = {

// //   devtool: "inline-source-map",
// //    devServer: {
// //       noInfo: false
// //    },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.tsx?$/,
// //         use: 'ts-loader',
// //         exclude: /node_modules/
// //       }
// //     ]
// //   },
// //   resolve: {
// //     extensions: [ '.tsx', '.ts', '.js' ]
// //   },
// //   output: {
// //     filename: 'bundle.js',
// //     publicPath: "/",
// //     path: path.resolve(__dirname, 'dist')
// //   },
// //   plugins: [
// //       new HtmlWebpackPlugin({
// //          template: "src/index.html",
// //          inject: true,
// //          debug: true
// //       }),
// //    ]
// // };


//const webpack =  require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// //const helpers = require('helpers');

// export default {
//    devtool: "inline-source-map",
//    devServer: {
//       noInfo: false
//    },

//    entry: [
//       path.resolve(__dirname, "src/vendor.ts"),
//       path.resolve(__dirname, "src/main.ts"),
//    ],
//    target: "web",
//    output: {
//       path: path.resolve(__dirname, "src"),
//       publicPath: "/",
//       filename: "[name].js"
//    },
//    plugins: [
//       new HtmlWebpackPlugin({
//          template: "src/index.html",
//          inject: true,
//          debug: true
//       }),
//       // new webpack.optimize.CommonsChunkPlugin({
//       //    name: "vendor"
//       // }),
//       //new webpack.IgnorePlugin(/spec\.[tj]s$/)
//    ],
//    resolve: {
//       extensions: ['.ts', '.js']
//    },
//    stats:'errors-only',
//    module: {
//       rules: [
//          {
//             enforce: 'pre',
//             test: /\.js$/,
//             loader: 'source-map-loader',
//             // exclude:[
//             //    // helpers.root('node_modules/rxjs'),
//             //    // helpers.root('node_modules/@angular')
//             // ]
//          },
//          {
//             test: /\.ts$/,
//             loader: 'ts',
//             exclude: [/test/, /node_modules/]
//          },

//          {
//             test: /\.css$/,
//             use: [
//                {
//                   loader: 'style-loader'
//                },
//                {
//                   loader: 'css-loader',
//                   options: {
//                      modules: true
//                   }
//                }
//             ]
//          }
//       ]
//    }
// };
