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

router.post("/", async (req, res) => {
  const { name, surname, city, region, contactper, price } = req.body;

  if (!name || !surname || !city || !region || !contactper || !price) {
    return res.status(422).json({ error: "This is an Error Fill All Feild" });
  }
  try {
    const user = new User({ name, surname, city, region, contactper, price });
    await user.save();
    return res.status(201).json({ error: "Register Sucessfully" });
    // res.status(201).json({ message: "user Successfully  registred" });
  } catch (err) {
    console.log(err);
  }
});

// Login

// router.post("/signin", async (req, res) => {
//   try {
//     let token;
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "Please Filled all Data " });
//     }
//     const userLogin = await User.findOne({ email: email });

//     console.log(userLogin);

//     if (userLogin) {
//       const isMatch = await bcrypt.compare(password, userLogin.password);

//       token = await userLogin.generateAuthToken();
//       console.log(token);
//       res.cookie("jwtoken", token, {
//         expires: new Date(Date.now() + 25892000000),
//         httpOnly: true,
//       });

//       if (!isMatch) {
//         res.status(400).json({ error: "Invalid Credientials pass !" });
//       } else {
//         res.json({ message: "User Signin Successfully!" });
//       }
//     } else {
//       res.status(400).json({ error: "Invalid Credientials !" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// *******************
router.get("/follow", authenticate, (req, res) => {
  console.log("Hello Follow us");
  res.send(req.rootUser);
});
// *************************
router.get("/getdata", authenticate, (req, res) => {
  console.log("Hello contact us");
  res.send(req.rootUser);
});
// *********** contact us page**************
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log("please Filled the contact");
      return res.status(422).json({ error: "please Filled the contact" });
    }
    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "user Contact Sucessfully" });
      console.log("user Contact Sucessfully");
    }
  } catch (error) {
    console.log(error);
  }
});

// ********** Logout page*********
router.get("/logout", (req, res) => {
  console.log("Hello Logout page");
  res.clearCookie('jwtoken', { path: '/' })
  res.status(200).send('user Logout');
});
// *************************



module.exports = router;
