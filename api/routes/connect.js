import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
    const result = await axios.get('http://localhost:3000/api/v1/users')
    const users = result.data; 


    let arrayOfPromises = users.map( user => 
        Promise.all(user.cars.map(carId => 
            axios.get(`http://localhost:3000/api/v1/cars/${carId}`)
        ))
    )

    const arrayOfarray = await Promise.all(arrayOfPromises)  

   
    users.forEach((user,index) => {
        console.log("start")
        console.log( Array.isArray(arrayOfarray[index]))
        console.log(arrayOfarray[index][index])
        console.log(arrayOfarray[index][index].data)
        user.cars = arrayOfarray[index].data
    })
    

     // console.log(result);
      res.json(users);

 });



 export default router;
