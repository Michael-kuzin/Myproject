import express from "express";
import users from "./users";
import cars from "./cars";

const router = express.Router();

router.use('/users', users);
router.use('/cars', cars);

export default router;
