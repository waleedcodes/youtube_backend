const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");


require("../db/conn");

const User = require("../model/userSchema");

// router.get("/", (req, res) => {
//   res.send(`This is a auth page `);
// });
// Using Promise
// router.post( '/register', ( req, res ) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if ( !name || !email || !phone || !work || !password || !cpassword ) {
//         return res.status( 422 ).json( { error: "This is an Error Fill All Feild" } );

//     }
//     User.findOne( { email: email } ).then( ( userExit ) => {
//         if ( userExit ) {
//             return res.status( 422 ).json( { error: "This email already Register!" } );
//         }

//         const user = new User( { name, email, phone, work, password, cpassword } );

//         user.save().then( () => {
//             res.status( 201 ).json( { message: "data Successfully  registred" } );
//         } ).catch( ( err ) => res.status( 500 ).json( { error: "Failed register" } ) )

//     } ).catch( ( err => { console.log( err ); } ) );

//     // console.log( req.body );
//     // console.log(name );
//     // console.log(email );
//     // res.json( { message: req.body } );
//     // res.send( `register page connected` );

// } )

// Using async

// router.post("/", async (req, res) => {
//   const { name, surname, city, region, contactper, price, email } = req.body;

//   if (!name || !surname || !city || !region || !contactper || !price || !email) {
//     return res.status(422).json({ error: "This is an Error Fill All Feild" });
//   }
//   try {
//     const userExit = await User.findOne({ email: email });
//     if (userExit) {
//       return res.status(422).json({ error: "This email already Register!" });
//     } else {
//       const user = new User({ name, surname, city, region, contactper, price, email });
//       await user.save();
//       res.status(201).json({ message: "Register Sucessfully" });
//     }

//   } catch (err) {
//     console.log(err);
//   }
// });

router.get("/", (req, res) => {
  res.send(`This is a Home page `);
});
router.post("/", async (req, res) => {
  const { name, Surname, email } = req.body;

  if (!name || !Surname || !email) {
    return res.status(422).json({ error: "please Fill all Filled!" });
  }
  try {
    const usersame = await User.findOne({ email: email });
    if (usersame) {
      return res.status(422).json({ error: "Email Already Register" });
    } else {
      const user = new User({ name, Surname, email });
      await user.save();
      res.status(201).json({ message: "Register Successfully!" });
    }
  } catch (err) {
    console.log(err)
  }
})




module.exports = router;
