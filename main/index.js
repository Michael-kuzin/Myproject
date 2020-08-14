import express from 'express';
import bodyParser from 'body-parser';
// import routes2 from './routes2';
// import routes1 from './routes1';
// import routes from './routes';
// import MongoConnector from './utils/MongoConnector';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// const connector = new MongoConnector();
// connector.init();

app.use('/', async function (req, res) {

    res.send('Sorry no such route available');
});

app.get('/api/v1/cars', () => ({}));
app.get('/api/v2/arrays', () => ({}));

app.get('/api/v1/users', async function (req, res) {

    let min = req.query.min;
    let max = req.query.max;
    let sort = req.query.sort;

  let newArr = [];

  if (sort) {
    newArr = newArr.sort(compareFunction);
  }

  if (min) {
    newArr = newArr.filter((item) => item.age >= min)
  }

  if (max) {
    newArr = newArr.filter((item) => item.age <= max)
  }

res.json(newArr);
});

// app.use('/api/v1', routes);
// app.use('/api/v2',routes1);




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
