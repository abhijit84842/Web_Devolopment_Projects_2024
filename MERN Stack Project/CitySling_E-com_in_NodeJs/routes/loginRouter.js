const express = require("express");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken")

// Model require
const UserModel = require("../models/userModel");
const router = express.Router();

// render the login page...
router.get("/", (req, res) => {
  res.render("login");
});

// post request
router.post("/success", async (req, res) => {
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(401).send("incorrect email id...");
  } else {
    // compare with DB stored password...
    bcrypt.compare(password, user.password, function (err, result) {
      if (result==false) {
       return res.status(401).send("incorrect password..")
      } else {
        // set cookie by JWT
        let token = jwt.sign({email:req.body.email}, "secrect")
        res.cookie("token" , token)

        res.status(200).redirect("/")
      }
    });
  }
});

module.exports = router;
