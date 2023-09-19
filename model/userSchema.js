const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// const { isValidPassword } = require('mongoose-custom-validators');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   surname: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   // phone: {
//   //   type: Number,
//   //   required: true,
//   //   unique: false,
//   // },
//   city: {
//     type: String,
//     required: true,
//   },
//   region: {
//     type: String,
//     required: true,
//   },
//   contactper: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//     unique: false,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   // address: {
//   //   type: String,
//   //   required: true,
//   // },
//   tokens: [
//     {
//       token: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
// });

// we are hashing the password

// userSchema.pre("save", async function (next) {
//   console.log("this is pre");
//   if (this.isModified("password")) {
//     console.log("this is pre password ");
//     this.password = await bcrypt.hash(this.password, 12);
//     this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });

// we are generating token
// userSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     console.log("This is a pree");
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };
// ******************************
// userSchema.methods.addMessage = async function (name, email, phone, message) {
//   try {
//     this.messages = this.messages.concat({ name, email, phone, message });
//     await this.save();
//     return this.messages;
//   } catch (error) {
//     console.log(error);
//   }
// };
// ***********************

// const User = mongoose.model("USER", userSchema);

// module.exports = User;



const Usersec = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  Surname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  }
})


const user = new mongoose.model("user", Usersec);

module.exports = user;


