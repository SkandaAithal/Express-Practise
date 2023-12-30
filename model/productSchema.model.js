const { Schema, model } = require("mongoose");

let productSchema = new Schema(
  {
    pname: {
      type: String,
      required: [true, "pname is mandatory"],
      min: [5, "pname must have 5 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is mandatory"],
    },
    color: {
      type: String,
      required: [true, "color is mandatory"],
    },
  },
  { timestamps: true }
);

module.exports = model("products", productSchema);
