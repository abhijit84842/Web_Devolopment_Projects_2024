const express = require("express");
const router = express.Router();

// middleware import
const isUserLoggedIn= require("../middlewares/isLogin")

const isAdminLoggedIn=require("../middlewares/adminIsLogIn");

// Multer import..
const upload= require("../config/multer-configuration")

// model import..
const ProductModel= require("../models/productModel")

// Show all Products...
router.get("/", isUserLoggedIn, async(req, res) => {

  let products= await ProductModel.find()
  // console.log(products)
  
  res.render("allproducts",{products})

});

// Rendering the Product Only
router.get("/productonly/:id" ,async(req,res)=>{
  // console.log(req.params.id)
  try{
   let product= await ProductModel.findOne({_id:req.params.id})
  //  console.log(product)
  }catch(err){
    console.log(err.message)
  }
  res.render("productonly" ,{product})
})


// showing women products
router.get("/women", isUserLoggedIn, (req,res)=>{
  res.render("womenproducts")
})

// Showing Men products
router.get("/men",isUserLoggedIn , (req,res)=>{
  res.render("menproducts")
})

// Showing kids products
router.get("/kids" , isUserLoggedIn ,(req,res)=>{
  res.render("kidsproducts")
})
// showing trolley products.
router.get("/trolley",isUserLoggedIn, (req,res)=>{
  res.render("trolleyproducts")
})

//Rendering the  Add your product by Owner
router.get("/addproducts", isAdminLoggedIn , (req,res)=>{

  let addProductMsg=req.flash("success")
  res.render("addproduct", {addProductMsg})
})

// POST req for add Products.
router.post("/addproducts" , isAdminLoggedIn ,upload.single('image') ,async (req,res)=>{
  // console.log(req.file)
  try{
    let { name , subtitle, company, description,price,size,color,category,discount,features,material}=req.body
    let products= await ProductModel.create({
      image: req.file.buffer,
      name,
      subtitle,
      company,
      description,
      price,
      size,
      color,
      category,
      discount,
      features,
      material,
  
    })
  
    // flash msg
    req.flash("success" , "Product added successfully...")
    res.redirect("/products/addproducts")
  }catch(err){
    console.log(err.message)
  }

})





module.exports = router;
