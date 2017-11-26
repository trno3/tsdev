"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var open = require("open");
var webpack = require("webpack");
var webpack_config_dev_1 = require("../webpack.config.dev");
var port = 3000;
var app = express();
var compiler = webpack(webpack_config_dev_1.default);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpack_config_dev_1.default.output.publicPath
}));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.get('/users', function (req, res) {
    res.json([
        { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorthon@gmail.com" },
        { "id": 3, "firstName": "Tima", "lastName": "Lee", "email": "lee.tima@gmail.com" }
    ]);
});
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});
//# sourceMappingURL=srcServer.js.map