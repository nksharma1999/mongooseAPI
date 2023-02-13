/** @format */
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  admin_id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userLevel: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const AdminModel = mongoose.model("admin", adminSchema);

const adminData = [
  {
    admin_id: "sdgdvdgssfbsbgfs",
    username: "xys",
    contact: 23534235,
    email: "nand@gmail.com",
    password: "sfsfs",
    userLevel: 2,
  },
];

export const createAdmin = async () => {
  try {
    await AdminModel.create(adminData);
    console.log("Admin Created");
  } catch (error) {
    console.log(error);
  }
};

/************jmdUsers */

const jmdUserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const jmdUserModel = mongoose.model("jmdUser", jmdUserSchema);

const userData = [
  {
    user_id: "sdfdsfbsbgfs",
    username: "bjsgf",
    contact: 2252335,
    email: "nandxysfaz@gmail.com",
    password: "sdgfdsasfgssdd",
    orders: ["sdgsdfdg", "sdgsdsdfgsd"],
  },
];

export const createUser = async () => {
  try {
    await jmdUserModel.create(userData);
    console.log("user Created");
  } catch (error) {
    console.log(error);
  }
};

/*****************OurServices */

const ourServiceSchema = new mongoose.Schema({
  os_id: {
    type: String,
    required: true,
    unique: true,
  },
  serviceType: {
    type: String,
    enum: {
      values: ["service", "acwork"],
      message: `{VALUE} is not supported`,
    },
  },
  serviceName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  location: [
    {
      type: String,
      required: true,
    },
  ],
  country: [
    {
      type: String,
      default: "India",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const ourServiceModel = mongoose.model("ourService", ourServiceSchema);

const ourServiceData = [
  {
    os_id: "dasdsaffgfbsbgfs",
    serviceType: "acwork",
    serviceName: "ac workxys",
    price: 4999,
    discount: 2,
    location: ["Mumbia"],
    country: ["India"],
  },
];

export const addService = async () => {
  try {
    await ourServiceModel.create(ourServiceData);
    console.log("service Added");
  } catch (error) {
    console.log(error);
  }
};

/****** order */

// const orderSchemma = new mongoose.Schema({
//   order_id: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   user_id: {
//     type: String,
//     required: true,
//   },
//   vehicleNumber: {
//     type: String,
//     required: true,
//   },
//   service: [
//     {
//       os_id: { type: String },
//       serviceType: { type: String },
//       serviceName: { type: String },
//       price: { type: Number },
//     },
//   ],
//   carType: {
//     manufature: String,
//     model: String,
//     fuel: String,
//   },
//   status: {
//     type: String,
//     default: "Open",
//   },
//   delivery: {
//     type: Date,
//   },
//   liveTrack: [{ type: String }],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });

// export const orderModel = mongoose.model("order", orderSchemma);
