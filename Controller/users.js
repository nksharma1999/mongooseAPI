/** @format */

import { Product } from "../model/Product.js";
import { UserModel } from "../model/users.js";
import CryptoJS from "crypto-js";
export const readMongooseData = async (req, res) => {
  // console.log(req.query);
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
      password: CryptoJS.AES.encrypt(password, "hello").toString(),
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
