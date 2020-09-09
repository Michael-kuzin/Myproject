import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
    const result = await axios.get('http://localhost:3000/api/v1/users')
    console.log('result');
    console.log(result);

    const cars = await Promise.all(result.cars.map(carId => {
        console.log('car');
        console.log(carId);
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3000/api/v1/cars/id').then(res => {
                resolve(res);
            })
            .catch(err => {
                throw new Error(err);
            })
        });
    }));

    

     // console.log(result); 
      res.send(result.data);
   
 });


 
 export default router;
 