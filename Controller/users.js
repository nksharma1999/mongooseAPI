/** @format */

import { Product } from "../model/Product.js";
import { UserModel } from "../model/users.js";
import CryptoJS from "crypto-js";
import doenv from "dotenv";
import jwt from "jsonwebtoken";
doenv.config();
export const readMongooseData = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let apiData = Product.find(queryObject);
  if (sort) {
    let fixSort = sort.split(",").join(" ");
    apiData = apiData.sort(fixSort);
  }
  if (select) {
    let fixSelect = select.split(",").join(" ");
    apiData = apiData.select(fixSelect);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);
  try {
    const myData = await apiData;
    res.send(myData);
  } catch (error) {
    res.send("Data Not Found");
  }
};

export const CreateUser = async (req, res) => {
  const { username, password, email } = req.query;
  if (username && password && email) {
    const newUser = new UserModel({
      username: username,
      email: email,
      password: CryptoJS.AES.encrypt(password, process.env.SEC_KEY).toString(),
    });
    try {
      await newUser.save();
      console.log("User created ");
      res.send("User Created");
    } catch (error) {
      res.send("User Not Created");
    }
  } else {
    res.send("Please enter data");
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    try {
      const findUser = await UserModel.findOne({ username: username });
      const hashedPassword = CryptoJS.AES.decrypt(
        findUser.password,
        process.env.SEC_KEY
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (originalPassword !== password) {
        res.status(401).json("Wrong Username / Password");
      } else {
        const accessToken = jwt.sign(
          {
            id: findUser._id,
            isAdmin: findUser.isAdmin,
          },
          process.env.JWT_SEC_KEY,
          { expiresIn: "3d" }
        );
        const { password, ...other } = findUser._doc;
        res.status(200).json({ ...other, AccessToken: accessToken });
      }
    } catch (error) {
      // console.log("data not found");
      res.status(401).json("Wrong Username / Password");
    }
  } else {
    res.status(401).json("Enter username / password");
  }
};
