import express from "express";

const router = express.Router();


let obj = {};

router.get('/', async function (req, res) {
  console.log("in get")
    res.json(obj);
 });

router.get('/:id',function(req,res) {
      let result;
      if(obj[req.params.id] !== undefined) {
         res.send(obj[req.params.id])
      } else {
        console.log("id false")
      }
      res.send(result)
 });

  
let transofrmer = function(req,res,next) {

  if(req.body.age) {  
    if(req.body.age < 18) {
      req.body["content"] = "kids"
    } else {
      req.body["content"] = "adult"
    }
  } 

    next()
}


router.post('/', transofrmer, function (req,res) {

    let reqObj = req.body;
   
    if(obj[req.body.id] == undefined) {
      obj[req.body.id] = reqObj
    } else {
      delete obj[req.body.id]
      obj[req.body.id] = reqObj
    }
    // let r = req.route;
    // console.log(req.body);
    // console.log(r);

    res.json(reqObj);
});

router.put('/:id',function(req,res) {
  let reqObj = req.body;
  let reqID = req.params.id;
  if(obj.id === reqID) {
    obj.id = reqObj
  }
  res.json(reqObj);
});

router.delete('/:id',function(req,res) {
  let reqID = req.params.id;
  if(obj.id === reqID) {
    obj = undefined
  }

});


export default router;
