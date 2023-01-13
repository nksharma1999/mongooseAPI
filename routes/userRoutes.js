/** @format */
import { readMongooseData, CreateUser } from "../Controller/users.js";
import express from "express";
const router = express.Router();

router.get("/api/mongoose/product?", readMongooseData);
router.get("/users/registration?", CreateUser);
export default router;
