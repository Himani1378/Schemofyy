import express from "express";
import mongoose from "mongoose";
import {User} from './Models/User.modal.js'
import { CloudFog } from "lucide-react";
// import Router from "./Router/auth";

const app=express();

const router = express.Router();

router.get('/',(req,res)=>{
    console.log("router hello");
    res.send("jhbhh")
})

router.post('/signup',(req,res)=>{
    console.log(req.body)
    const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(422).json({error : "Please Fill all the Details"})
        return
    }
    User.findOne({email:email})
            .then((userExist)=>{
                console.log(userExist)
                if(userExist){
                    return res.status(422).json({error : "Account already Exists"})
                    return
                }

                const user=new User({name,email,password})
                user.save().then(()=>{
                    res.status(201).json({message:"User Registered Successfully"})
                }).catch((err)=>{
                    console.log(err)
                    res.status(422).json({error:"Something Went Wrong"})
                })
            })
})

app.use(express.json())
app.use(router)

// app.get('/',(req, res)=>{
//     console.log("hello")
//     res.send("hello")
// })


app.listen(5000, ()=>{
    console.log("serverrunnoing")
})



mongoose.connect("mongodb+srv://dhimanvivek777:sXDwALG6apXJ7yzM@cluster0.p5gxsym.mongodb.net/?retryWrites=true&w=majority")
                .then(()=>{
                    console.log("db connected")
                })
                .catch((err)=>{
                    console.log(err)
                })