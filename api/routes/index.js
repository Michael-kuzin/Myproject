import express from "express";
import connect from "./connect";
// import bodyParser from 'body-parser';
import user from "./user";

const router = express.Router();

// router.use(bodyParser.json());

router.use("/user",user);
router.use("/connect",connect);

export default router;