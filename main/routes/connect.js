import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
   const result = await axios.get('http://localhost:3001/api/v1/user')
  
    // console.log(result); 
     res.send(result.data);
  
});

export default router;
