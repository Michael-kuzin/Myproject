import express from "express";
import users from "./users";
import cars from "./cars";
// import objects from "./objects";
import connect from "./connect";
// import MongoConnector from './utils';


const router = express.Router();
// const connector = new MongoConnector();
// connector.init();
// connector.get();

router.use('/users', users);
router.use('/cars', cars);
// router.use('/objects', objects);
router.use('/connect', connect);
// router.use('/artist', artist);

export default router;
