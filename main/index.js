import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const arr = [];
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('you posted:\n');
//     res.end(JSON.stringify(req.body, null, 2))
// });

app.get('/', function (req, res) {
    res.json(arr);
});

app.get('/:id',function(req,res) {
  console.log("get obj by id");
    let result = arr.filter(item => item.id === JSON.parse(req.params.id)) ? arr.filter(item => item.id === JSON.parse(req.params.id))[0] : null;
    res.send(result)
});

app.post('/',function (req,res) {
    // res.write('you posted:\n');
    // res.end(JSON.stringify(req.body, null, 2))
      let reqObj = req.body;
      arr.push(reqObj);
      res.json(reqObj);
});

app.put('/:id',function(req,res) {
  let reqObj = req.body;
  let reqID = req.params.id;
      arr.forEach((item, i) => {
          if(item.id === reqID) {
            arr.splice(i,1);
            arr.push(reqObj);
          }
      });
    res.json(reqObj);
});


app.patch('/:id',function(req,res) {
  let reqObj = req.body;
  let reqID = req.params.id;
  let result;
        arr.forEach((item, i) => {
            if(item.id == reqID) {
             let prop = Object.keys(reqObj);
                  prop.forEach((key, i) => {
                    item[key] = reqObj[key];
                  });
              result = item;
            };
         });
         console.log(result);
    res.json(result);
})

app.delete('/:id',function(req,res) {
  let reqID = req.params.id;
   arr.forEach((item, i) => {
       if(item.id === reqID) {
         arr.splice(i,1);
       }
   });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
