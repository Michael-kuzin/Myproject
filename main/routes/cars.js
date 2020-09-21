import express from "express";

const router = express.Router();
const arr = [];

const compareFunction = function(a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
}

router.get('/', async function (req, res) {

     let min = req.query.min;
     let max = req.query.max;
     let sort = req.query.sort;

   let newArr = arr;

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

router.get('/:id',function(req,res) {
  const {id} = req.params
  console.log("get obj by id");
  console.log(arr)
  const result = arr.find(elm => elm.id === id)
  console.log(result)
    res.send(result)
});

let validatorFunc = function(req, res, next) {
  let reqObj = req.body;
     if(reqObj.age < 18) {
       res.status(404).send('Sorry,age to low');
     }
    next()
}

let checkAdmin = function(req, res, next) {
  let reqObj = req.body;
  if(reqObj.isAdmin === false) {
    res.status(404).send('Sorry,you not admin');
  }
 next()
}


router.post('/', function (req,res) {
      let reqObj = req.body;

       arr.push(reqObj);
       res.json(reqObj);
});

router.put('/:id',function(req,res) {
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


router.patch('/:id',function(req,res) {
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

router.delete('/:id',function(req,res) {
  let reqID = req.params.id;
   arr.forEach((item, i) => {
       if(item.id === reqID) {
         arr.splice(i,1);
       }
   });
});




export default router;
