import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
    const result = await axios.get('http://localhost:3000/api/v1/objects')
    const objects = result.data
    console.log(objects)
    console.log(objects[1].girls)
    const keys = Object.keys(objects)
    console.log(keys)

    const girlss =  await Promise.all(keys.map((key, i) => {
     console.log(objects[key])
     console.log(objects[key].girls)
     return Promise.all(objects[key].girls.map(girlId => {
       return axios.get(`http://localhost:3000/api/v1/girls/${girlId}`)
     }))
   }))

   console.log(girlss);
   keys.forEach((key,index) => {
     objects[key].girls = girlss[index].map(response => response.data)
   })
    res.json(objects);
 });

export default router;
