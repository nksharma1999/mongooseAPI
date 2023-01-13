/** @format */
import {
  readMongooseData,
  CreateUser,
  loginUser,
} from "../Controller/users.js";
import { verifyJWT } from "../Controller/auth.js";
import express from "express";
const router = express.Router();

router.get("/api/mongoose/product?", verifyJWT, readMongooseData);
router.get("/users/registration?", CreateUser);
router.post("/users/login/", loginUser);
export default router;
