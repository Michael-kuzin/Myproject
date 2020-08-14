import express from "express";
import users from "./users";
import cars from "./cars";
import objects from "./objects";


const router = express.Router();

router.use('/users', users);
router.use('/cars', cars);
router.use('/objects', objects);


export default router;
