import User from '../modal/modal.js';
const del=(req,res)=>{
try{
    const {email}=req.body;
    User.destroy({where:{email:email}})
    res.send("User Deleted")
}
catch(error){
   throw new Error("Error deleting user",error)
}

}
export {del};