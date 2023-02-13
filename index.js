/** @format */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import { connectDB } from "./model/Product.js";
import { start } from "./mongoose/insertData.js";
import { createAdmin, createUser, addService } from "./model/admin.js";
const app = express();
dotenv.config();
let port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/", router);
try {
  await connectDB(process.env.MONGOURI_JMD);
  // start();
  // createAdmin();
  // createUser();
  // addService();
  app.listen(port, () => {
    console.log(`Server Running on Port Number : ${port}`);
  });
} catch (error) {
  console.log(error);
}
