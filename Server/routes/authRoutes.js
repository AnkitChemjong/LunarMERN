import express from "express";
import uploadUser from "../multer/userImage.mjs";
import passport from "passport";
import '../pass/google.mjs';
import giveLogUser,{ loginUser, registerUser,userBlog,deleteCookie,generateToken  } from "../controllers/auth.js";


import dotenv from 'dotenv';
dotenv.config();


const authRoutes = express.Router();

authRoutes.post('/login', loginUser)
authRoutes.post('/register',uploadUser.single('userImage'), registerUser);
authRoutes.get('/auth/google',passport.authenticate('google'));
authRoutes.get('/auth/callback',passport.authenticate('google',{session:false}),(req,res)=>{
    // console.log(req.user);
    const token=generateToken(req.user);
    res.cookie('cook',token,{ httpOnly: true, maxAge: 3600000 }).redirect(process.env.FURL);
});
authRoutes.get('/logUser',giveLogUser);
authRoutes.delete('/deleteCookie',deleteCookie);
authRoutes.get('/userBlog', userBlog)


export default authRoutes;