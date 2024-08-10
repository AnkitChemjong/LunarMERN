import db from "../db.js";
import fs from 'fs';
import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({ 
  cloud_name: process.env.CN, 
  api_key:process.env.AK , 
  api_secret:process.env.AS
});

export const createBlog =async (req, res) => {
    const sql = "INSERT INTO blog (`title`, `description`,`blogImage`, `userId`,`createdAt`) VALUES (?, ?,?, ?,?)";
    const time=new Date().toISOString().slice(0, 19).replace('T', ' ');
    const { title, description } = req.body;
    const userId = req.user.id; // Get the user ID from the request object
    const x=await cloudinary.uploader.upload(req.file.path);  
    db.query(sql, [title, description,x.url, userId,time], (err, result) => {
      if (err) return res.status(500).json({message:err.message});
      fs.unlink((req.file.path),(error)=>{

        console.log(error);
      }
      )
      return res.status(200).json({ message: "Blog post created successfully", result });
    });
  };
  
  
  export const getBlog = (req, res)=>{
    const sql = "SELECT * from blog"
    let blogs=[];
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).send(err);
        for(let i=0; i<result.length; i++){
          let id=result[i].userId;
          const blog=result[i];
          const sql2="Select * from auth where userId=(?)"
          db.query(sql2,[id],(err, result)=>{
            blog.user=result[0];
            blogs.push(blog);
            return res.status(200).json({message:"get details", result:blogs})
          });
        }

    });
  };
  
  
  export const deleteBlog =async (req,res)=>{
  
    const {blogId} =await req.body;
    const userId=await req.user.id;
  
    const sql = "DELETE from blog WHERE blogId = ? and userId = ?";
  
    db.query(sql,[blogId,userId],(err,result)=>{
        if(err) return res.status(500).send({message:`You are not allowed to delete this blog ${err.message}`});
        return res.status(200).send({message: "value deleted", result})
    })
  };
  
  
  export const updateBlog = async (req,res)=>{
      const blogId =await req.params.id;
      const userId=await req.user.id;
      const {title,description}=req.body;
      const sql1="select * from blog where blogId = ? and userId=?";
      db.query(sql1,[blogId,userId],(err,result)=>{
        if (err) {res.send(err);}
        if(result.length===0){
          res.send("No blog found");
        }
        const time=new Date().toISOString().slice(0, 19).replace('T', ' ');
  
        const sql ="UPDATE blog set title = ?, description = ?, updatedAt = ? WHERE BlogId = ? and userId=?";
      
    
        db.query(sql,[title,description,time,blogId,userId],(err,result)=>{
            if(err) return res.status(500).send({message:`You are not allowed to update this blog ${err.message}`});
            return res.status(200).send({message: "Value Updated", result})
        })
    
      })
  }