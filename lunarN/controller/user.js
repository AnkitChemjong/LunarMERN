import User from '../modal/modal.js'
export const user= async (req,res)=>{
    try{
    const {userName,email,password} = req.body;
    await User.create({userName,email,password});
    res.send("user is created successfully")
}
catch(err){
    throw new Error(err);
}
}