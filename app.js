import express from 'express';
import fs from 'fs';
import { router } from './src/videos.js';
import { getTimePassed } from './src/utils.js';

const app = express();
const host = '127.0.0.1';
const port = '3000'

app.locals.getTime = getTimePassed;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', router);

app.listen(port, host, () => {
  console.log(
    `Server @ http://${host}:${port}`,
  );
});
