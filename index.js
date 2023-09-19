const mongoose = require(`mongoose`);
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

require("./db/conn");
const User = require("./model/userSchema");
// Middelware

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(require("./router/auth"));

const middleware = (req, res) => {
  console.log(`Hello my Middleware`);
  // next();
};

// app.get( '/about', middleware, ( req, res ) =>
// app.get('/about', (req, res) => {
//     res.send(`This is a about page `);
//     console.log("This is a about page");
// })
// app.get("/contact", (req, res) => {
//   res.send(`This is a contact page `);
//   console.log("This is a contact page");
// });

app.listen(PORT, () => {
  console.log(`This is waleed ${PORT}`);
});


// app.get('/getAllUser', async (req, res) => {
//   try {
//     const allUser = await User.find({});
//     res.send({ status: "ok", data: allUser })
//   } catch (err) {
//     console.log(err)
//   }
// });




app.get("/getAllData", async (req, res) => {
  try {
    const AllData = await User.find({});
    res.send({ status: "ok", data: AllData });
  } catch (err) {
    console.log(err)
  }
})