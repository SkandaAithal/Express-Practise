const productsCollection = require("../model/productSchema.model");
let addProducts = async (req, res) => {
  try {
    let { color, pname, price } = req.body;
    let newProduct = await productsCollection.create({ color, pname, price });

    res
      .status(201)
      .json({ error: false, message: "product added succesfully", newProduct });
  } catch (err) {
    let errMsg = err.message.split(":")[2].trim();
    res.status(500).json({ error: errMsg });
  }
};

let getProduct = async (req, res) => {
  try {
    let products = await productsCollection.find({}, { pname: 1, color: 1 });
    res.json({ error: false, message: "All products", products });
  } catch (err) {
    let errMsg = err.message.split(":")[2].trim();
    res.status(500).json({ error: errMsg });
  }
};

let updatedProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let { pname } = req.body;

    let updatedProducts = await productsCollection.findByIdAndUpdate(
      { _id: id },
      { pname },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      error: false,
      message: "product updated succesfully",
      updatedProducts,
    });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

let deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;

    let deletedProducts = await productsCollection.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      error: false,
      message: "product deleted succesfully",
      deletedProducts,
    });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

let singleProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productsCollection.findOne({
      pname: id,
    });
    res.send({ error: false, message: "Singele product", product });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

module.exports = {
  addProducts,
  updatedProduct,
  deleteProduct,
  singleProduct,
  getProduct,
};
