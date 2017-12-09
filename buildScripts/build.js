/*eslint-disable no-console */
import * as webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import * as chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err: any, stats: any) => {
   if (err) { // so a fatal error occurred. Stop here.
      console.log(chalk.red(err));
      return 1;
   }

   const jsonStats = stats.toJson();

   if (jsonStats.hasErrors) {
      return jsonStats.errors.map((error: any) => console.log(chalk.red(error)));
   }

   if (jsonStats.hasWarnings) {
      console.log(chalk.yellow('Webpack generated the following warnings: '));
      jsonStats.warnings.map((warning: any) => console.log(chalk.yellow(warning)));
   }

   console.log(chalk.magenta(`Webpack stats: ${stats}`));

   // if we got this far, the build succeeded.
   console.log(chalk.green('Your app has been built for production and written to /dist!'));

   return 0;
});
