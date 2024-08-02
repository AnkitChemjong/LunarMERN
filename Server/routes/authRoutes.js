import express from "express";
import uploadUser from "../multer/userImage.mjs";

import { loginUser, registerUser } from "../controllers/auth.js";


const authRoutes = express.Router();

authRoutes.post('/login', loginUser)
authRoutes.post('/register',uploadUser.single('userImage'), registerUser)


export default authRoutes;