import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('you posted:\n');
//     res.end(JSON.stringify(req.body, null, 2))
// });

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/test',function (req,res) {
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
