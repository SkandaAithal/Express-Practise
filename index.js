// app.get(
//   "/",
//   (req, res, next) => {
//     res.send("Hello World");
//     console.log("a");
//     next();
//     console.log("a end");
//   },
//   (err, res, next) => {
//     console.log("b");
//     next();
//   },
//   (req, res, next) => {
//     console.log("c");
//   }
// );

// app.get("/", (req, res, next) => {
//   res.send("Hello World");
//   console.log("a");
//   next();
//   console.log("a end");
// });
// app.get("/", (req, res, next) => {
//   next();
//   console.log("b");
//   console.log("b end");
// });

// app.get("/", (req, res, next) => {
//   console.log("c");
// });

// ^ CRUD operations
const express = require("express");
require("dotenv").config();
const connectToMongoDB = require("./db/connection");
const Productrouter = require("./routes/products.routes");
let app = express();
app.use(express.json());

app.use("/", Productrouter);
let startServer = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}!`);
    });

    await connectToMongoDB(process.env.URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

startServer();
