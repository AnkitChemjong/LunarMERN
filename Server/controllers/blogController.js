import db from "../db.js";


export const createBlog =async (req, res) => {
    const sql = "INSERT INTO blog (`title`, `description`,`blogImage`, `userId`,`createdAt`) VALUES (?, ?,?, ?,?)";
    const time=new Date().toISOString().slice(0, 19).replace('T', ' ');
    const { title, description } = req.body;
    const userId = req.user.id; // Get the user ID from the request object
    db.query(sql, [title, description,`blog/${req.file.filename}`, userId,time], (err, result) => {
      if (err) return res.status(500).json({message:err.message});
      return res.status(200).json({ message: "Blog post created successfully", result });
    });
  };
  
  
  export const getBlog = (req, res)=>{
    const sql = "SELECT * from blog b join auth a on a.userId=b.userId";
    db.query(sql,(err,result)=>{
      console.log(result);
        return res.status(200).json({message:"get details", result:result})
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