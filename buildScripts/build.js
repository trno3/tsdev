"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var webpack_config_prod_1 = require("../webpack.config.prod");
var chalk = require("chalk");
process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));
webpack(webpack_config_prod_1.default).run(function (err, stats) {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    var jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(function (error) { return console.log(chalk.red(error)); });
    }
    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(function (warning) { return console.log(chalk.yellow(warning)); });
    }
    console.log(chalk.magenta("Webpack stats: " + stats));
    console.log(chalk.green('Your app has been built for production and written to /dist!'));
    return 0;
});
//# sourceMappingURL=build.js.map