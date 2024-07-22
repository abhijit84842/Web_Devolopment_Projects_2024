const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Model require
const UserModel = require("../models/userModel");
const OwnerModel = require("../models/ownerModel");
const router = express.Router();

// render the user login page...
router.get("/", (req, res) => {
  res.render("login");
});

// render the Admin login page
router.get("/adminlogin",(req,res)=>{
  res.render("adminlogin")
})

// post request for user login
router.post("/userlogin", async (req, res) => {
  let { email, password } = req.body;

  // user loging Authentication check..
  let user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(401).send("incorrect email id...");
  } else {
    // compare with DB stored password...
    bcrypt.compare(password, user.password, function (err, result) {
      if (result == false) {
        return res.status(401).send("incorrect password..");
      } else {
        // set cookie by JWT
        let token = jwt.sign({ email: req.body.email }, "secrect");
        res.cookie("token", token);

        res.status(200).redirect("/");
      }
    });
  }
});



// post request for Owner login
router.post("/adminlogin",async (req,res)=>{
  let {email, password}= req.body
  let owner=await OwnerModel.findOne({email:email})
  if(!owner){
    return res.status(401).send("Owner not found..")
  }else{
    bcrypt.compare(password, owner.password, function(err, result) {
      // result == true
      if(result==false){
        return res.status(401).send("Password is incorrect...")
      }else{
        let token = jwt.sign({email:email},"secrect")
        res.cookie("token",token)
        // res.redirect("/products/addproducts")
        res.redirect("/owners")
      }
  });
  }
})

module.exports = router;
