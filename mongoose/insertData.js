/** @format */
import { Product, connectDB } from "../model/Product.js";
import { UserModel } from "../model/users.js";
const productData = [
  {
    name: "iphone12",
    price: 232,
    feature: true,
    company: "apple",
  },
  {
    name: "iphone",
    price: 232,
    feature: true,
    company: "apple",
  },
  {
    name: "samsungds",
    price: 232,
    feature: true,
    company: "samsung",
  },
  {
    name: "iphone",
    price: 232,
    feature: true,
    company: "apple",
  },
  {
    name: "samsung23",
    price: 232,
    feature: true,
    company: "samsung",
  },
  {
    name: "samsung5433",
    price: 232,
    feature: true,
    company: "samsung",
  },
  {
    name: "iphone",
    price: 232,
    feature: true,
    company: "apple",
  },
  {
    name: "mi21",
    price: 232,
    feature: true,
    company: "mi",
  },
];
const userData = [
  {
    username: "nks",
    email: "nks@gmail.com",
    password: "nks",
  },
];
export const start = async () => {
  try {
    // await connectDB();
    // await model.create(productData);
    // await UserModel.create(userData);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

// start();
