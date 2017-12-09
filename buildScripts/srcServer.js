const express = require('express');
const path = require('path');
const webpack = require('webpack');
const open = require('open');
const webpackConfig = require('../webpack.config.dev');

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: false,
   publicPath: webpackConfig.output.publicPath
}));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      open('http://localhost:' + port);
   }
})
