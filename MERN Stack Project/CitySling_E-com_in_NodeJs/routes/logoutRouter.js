const express = require('express')

const router= express.Router()

router.get("/adminlogout", (req,res)=>{
    res.cookie("atoken", "")
    res.redirect("/owners")
})

// User logout
router.get("/userlogout", (req,res)=>{
    res.cookie("utoken","")
    res.redirect("/")
})

module.exports= router