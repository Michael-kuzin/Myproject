import express from "express";
import users from "./users";
import cars from "./cars";
import objects from "./objects";
import connect from "./connect";
import girls from "./girls"
// import artist from "./artist"

const router = express.Router();

router.use('/users', users);
router.use('/cars', cars);
router.use('/objects', objects);
router.use('/connect', connect);
router.use('/girls', girls);



// router.use('/artist', artist);

export default router;
