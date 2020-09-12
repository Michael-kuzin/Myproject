import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
    const result = await axios.get('http://localhost:3000/api/v1/users')
    console.log('result');
    console.log(result.data);


    const cars = await Promise.all()        

    let dvadvavosem = [1,2,3,4];
    let arr = dvadvavosem.map(elem => {
        return new Promise((resolve,reject) => {
            resolve(elem)    
        }) 
    })




     // console.log(result);
      res.send(result.data);

 });



 export default router;
