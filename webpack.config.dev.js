import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
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
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                     modules: true
                  }
               }
            ]
         }
      ]
   }
};
