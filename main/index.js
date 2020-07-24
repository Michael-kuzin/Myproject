import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use('/api/v1', routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
