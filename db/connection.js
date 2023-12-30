const mongoose = require("mongoose");

let connectToMongoDB = (url) => {
  return mongoose.connect(url);
};
module.exports = connectToMongoDB;
