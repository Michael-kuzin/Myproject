import express from "express";
import users from "./users";
import cars from "./cars";
import objects from "./objects"
import MongoConnector from './utils';


const router = express.Router();
const connector = new MongoConnector();
connector.init();
connector.get();

router.use('/users', users);
router.use('/cars', cars);
router.use('/object', object);


export default router;
