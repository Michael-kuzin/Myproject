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

const compareFunction(a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
}

app.get('/', async function (req, res) {

     let min = req.query.min;
     let max = req.query.max;
     let sort = req.query.sort;

   let newArr = () => { if(min && max) {
       return arr.filter((item) => item.age >= min && item.age <= max);
    } else if(sort) {
         return arr.sort(compareFunction);
    } else if(min && max && sort) {
      return arr.filter((item) => item.age >= min && item.age <= max).sort(compareFunction)
    }
  }

    // let newArr1 = arr.sort(compareFunction);
    // let newArr = arr.filter((item) => item.age >= min && item.age <= max);

 res.json(newArr);
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
