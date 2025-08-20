import express from "express";
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("router hello");
    res.send("jhb")
})

export default router