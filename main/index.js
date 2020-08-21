import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import MongoConnector from './utils';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const connector = new MongoConnector();
connector.init();



app.get('/artists',function(req,res) {
  connector.get().collection('artists').find().toArray(function(err,docs){
    if(err) {
    console.log(err);
    return res.sendStatus(500);
    }
    res.send(docs)
  })
})


app.post('/artists', function (req,res) {
  var artist = req.body.name
connector.get().collection(artists).insert(artist, function (err, result) {
if(err) {
console.log(err);
return res.sendStatus(500);
}
res.send(artist);
})
});


// app.use('/api/v1', routes);
// app.use('/api/v2', routes1);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
