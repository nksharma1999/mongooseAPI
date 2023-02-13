/** @format */
import {
  readMongooseData,
  CreateUser,
  loginUser,
  addProduct,
  updateProduct,
  mongooseQuery,
} from "../Controller/users.js";
import { getService } from "../Controller/jmd.js";
import { verifyJWT } from "../Controller/auth.js";
import express from "express";
const router = express.Router();

router.get("/api/mongoose/product?", verifyJWT, readMongooseData);
router.get("/users/registration?", CreateUser);
router.post("/users/login/", loginUser);
router.post("/users/addProduct/", verifyJWT, addProduct);
router.post("/users/updateProductInfo/:id", verifyJWT, updateProduct);
router.post("/users/mongoose", mongooseQuery);
router.get("/jmd/ourService", getService);
export default router;
