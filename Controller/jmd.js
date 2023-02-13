/** @format */
import { ourServiceModel } from "../model/admin.js";
export const getService = async (req, res) => {
  console.log(req.body);
  try {
    // await ourServiceModel.create(req.body);
    //
    const data = await ourServiceModel.find({
      serviceType: req.body.serviceType,
      location: "Pune",
    });

    // console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("Data Not found");
  }
};
