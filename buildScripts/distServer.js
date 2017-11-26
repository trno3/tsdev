"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
require("open");
var compression = require("compression");
var port = 3000;
var app = express();
app.use(compression());
app.use(express.static("dist"));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        open("http://localhost:" + port);
    }
});
//# sourceMappingURL=distServer.js.map