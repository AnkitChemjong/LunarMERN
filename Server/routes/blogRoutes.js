import express from "express";
import upload from "../multer/upload.mjs";
import { authToken } from "../middleware/authToken.js";
import { createBlog, deleteBlog, getBlog, updateBlog } from "../controllers/blogController.js";


const blogRoutes = express.Router();

blogRoutes.post('/create',authToken,upload.single('image'), createBlog)
blogRoutes.get('/get', getBlog)
blogRoutes.delete('/delete', deleteBlog)
blogRoutes.put('/update/:id', updateBlog)

export default blogRoutes;