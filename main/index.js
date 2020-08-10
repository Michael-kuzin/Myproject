import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import MongoConnector from './utils/MongoConnector';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const connector = new MongoConnector();
connector.init();

app.use('/api/v1', routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
