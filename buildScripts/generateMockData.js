"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsf = require("json-schema-faker/ts");
var mockDataSchema_1 = require("./mockDataSchema");
var fs = require("fs");
var chalk = require("chalk");
var json = JSON.stringify(jsf.format(mockDataSchema_1.schema));
fs.writeFile("./src/api/db.json", json, function (err) {
    if (err) {
        return console.log(chalk.red(err.message));
    }
    else {
        console.log(chalk.green("Mock data generated."));
    }
});
//# sourceMappingURL=generateMockData.js.map