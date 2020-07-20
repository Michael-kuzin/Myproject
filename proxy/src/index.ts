import express from 'express';
import bodyParser from 'body-parser';

const port = 3002;
const app = express();

// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function() {console.log("DB connected")});
// mongoose.connect('mongodb://localhost:27017/chat_demo');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
    res.send('hello from Proxy <br/>' + new Date());
});

app.get('/asd', (_req, res) => {
    res.send('Proxy asd');
});


app.listen(port, 'localhost', function onStart(_err) {
    console.log(`==> 🌎 Listening on port %s. Open up http://127.0.0.1:${port} in your browser.`);
});