import express from "express";

const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
  let result = axios.get('http://localhost:3001/api/v1/user')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    res.json(result);

});

export default router;
