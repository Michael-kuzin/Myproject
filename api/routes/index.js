import express from "express";
// import bodyParser from 'body-parser';
import user from "./user";

const router = express.Router();

// router.use(bodyParser.json());

router.use("/user",user);

export default router;