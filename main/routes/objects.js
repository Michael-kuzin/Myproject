import express from "express";

const router = express.Router();


let obj = {};

router.get('/', async function (req, res) {
  console.log("in get")
    res.json(obj);
 });

router.get('/:id',function(req,res) {
      let result;
      if(obj.id === req.params.id) {
         result = obj
      } else {
        console.log("id false")
      }
      res.send(result)
 });

router.post('/', function (req,res) {

    let reqObj = req.body;
    obj = reqObj;
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
