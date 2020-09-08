import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use('/api/v1', routes);
app.use('/', async function (req, res) {
    res.send('Sorry no such route available');
  });


app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});