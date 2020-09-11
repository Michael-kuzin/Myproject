import express from "express";
// import bodyParser from 'body-parser';
import connect from "./connect";
import user from "./user";

const router = express.Router();

// router.use(bodyParser.json());

router.use("/user",user);
router.use("/connect",connect);


export default router;
