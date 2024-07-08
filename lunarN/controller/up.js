import User from '../modal/modal.js';
import bcrypt from 'bcrypt';
const updateUser=async (req,res)=>{
    try{
      const id=req.params.id;
      //console.log(id);
        const {userName,email,password}=req.body;
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);
        await User.update( { userName,email, password: hashPassword, salt },
            { where: { id } })
        res.json({message:"User Updated success"});
        console.log("User Updated Success")
    }
    catch(error){
        console.log(error);
    }

}
export {updateUser}