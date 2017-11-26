/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

/* eslint-disable no-console */

import * as jsf from 'json-schema-faker/ts';
import { schema } from './mockDataSchema';
import * as fs from 'fs';
import * as chalk from 'chalk';

const json = JSON.stringify(jsf.format(schema));

fs.writeFile("./src/api/db.json", json, (err: NodeJS.ErrnoException) => {
   if (err) {
      return console.log(chalk.red(err.message));
   } else {
      console.log(chalk.green("Mock data generated."));
   }
});
