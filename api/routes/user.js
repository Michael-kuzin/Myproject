import express from "express";

const router = express.Router();

const arr = [];


router.get('/', async function (req, res) {
   console.log("3001")
     res.send(arr)
 });

 router.post('/',function (req,res) {
    let reqObj = req.body;

    arr.push(reqObj);
    res.json(reqObj);
 });

export default router;
