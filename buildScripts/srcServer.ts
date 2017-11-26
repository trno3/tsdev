import * as express from 'express';
import * as path from 'path';
import open = require('open');
import * as webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
   res.json([
      { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
      { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorthon@gmail.com" },
      { "id": 3, "firstName": "Tima", "lastName": "Lee", "email": "lee.tima@gmail.com" }
   ])
});

app.listen(port, (err: any) => {
   if (err) {
      console.log(err);
   } else {
      open('http://localhost:' + port);
   }
})
