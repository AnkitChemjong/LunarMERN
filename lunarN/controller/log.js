import User from '../modal/modal.js';

export const log= async (req,res)=>{
    try{
    const {email,password} = req.body;
    // const user=await User.findOne({
    //     where: { email: email,password:password }
    //   });
    const token=await User.findByCredentials(email,password);
    if(!token) throw new Error("No token found");
    res.cookie("cook",token);
    // console.log(user.dataValues);
    console.log(token);
    res.json({user:req.user});
}
catch(err){
    throw new Error(err);
}
}
