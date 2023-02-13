/** @format */

import mongoose from "mongoose";
mongoose.set({
  strictQuery: false,
});
export const connectDB = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// modeles creation

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  Quantity: {
    type: Number,
    default: 0,
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} is not supported`,
    },
  },
});

export const Product = mongoose.model("Product", productSchema);
