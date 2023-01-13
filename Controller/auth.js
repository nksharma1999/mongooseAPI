/** @format */
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC_KEY, (err, result) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }
      req.result = result;
      //   console.log(result);
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
