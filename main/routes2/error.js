import express from "express";

const router = express.Router();


router.get('/', async function (req, res) {
  console.error("its imposible")
 });

router.get('/:id',function(req,res) {
    console.error("its imposible")
 });

router.post('/', function (req,res) {
    console.error("its imposible")
   
});

router.put('/:id',function(req,res) {
    console.error("its imposible")
});

router.delete('/:id',function(req,res) {
    console.error("its imposible")
});


export default router;