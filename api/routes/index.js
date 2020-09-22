import express from "express";
import connect from "./connect";
// import bodyParser from 'body-parser';
import connectobject from "./connectobject";
import user from "./user";

const router = express.Router();

// router.use(bodyParser.json());

router.use("/user",user);
router.use("/connect",connect);
router.use("/connectobject",connectobject);

export default router;