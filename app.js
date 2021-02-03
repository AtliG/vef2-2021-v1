import express from 'express';
import router from './src/videos.js'; // eslint-disable-line
import { getTimePassed, getDuration } from './src/utils.js'; // eslint-disable-line

const app = express();
const host = '127.0.0.1';
const port = '3000';

app.locals.getTime = getTimePassed;
app.locals.getDuration = getDuration;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

/* eslint-disable */
app.use((error, req, res) => {
  return res.render('error', { error });
});
/* eslint-enable */

app.use('/', router);

app.listen(port, host, () => {
  console.log(
    `Server @ http://${host}:${port}`,
  );
});
