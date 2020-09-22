import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
    const result = await axios.get('http://localhost:3000/api/v1/objects')
    const objects = result.data


    const girls =  await Promise.all(objects.girls.map(girlId => {
        return axios.get(`http://localhost:3000/api/v1/cars/${girlId}`)
     }))   

    console.log(girls);
    objects.girls = objects.girls.map((girlId, index) => girls[index].data);
    res.json(objects);
 });

export default router;