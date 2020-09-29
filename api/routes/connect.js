import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
    const result = await axios.get('http://localhost:3000/api/v1/users')
    console.log('result');
    console.log(result);
    console.log(result.data);
    console.log(result.data[0]);

    const cars = await Promise.all(result.data.cars.map(carId => {
        console.log('car');
        console.log(carId);
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3000/api/v1/cars/${carId}').then(res => {
                resolve(res.data);
            })
            .catch(err => {
                throw new Error(err);
            })
        });
    }));

    const arrayOfarray = await Promise.all(arrayOfPromises)  

   
    users.forEach((user,index) => {
        console.log("start")
        console.log( Array.isArray(arrayOfarray[index]))
        console.log(arrayOfarray[index][index])
        console.log(arrayOfarray[index][index].data)
        user.cars = arrayOfarray[index].data
    })
    // console.log(result);
      res.send(result.data);

 });



 export default router;
