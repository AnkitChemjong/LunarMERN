import User from '../modal/modal.js';

export const getUser = async (req,res) =>{
     const allUser=await User.findAll({});
     res.json({user:allUser})
}