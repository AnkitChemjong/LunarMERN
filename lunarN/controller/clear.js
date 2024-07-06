export const delCookie=(req,res)=>{
   res.clearCookie('cook').send("cookie deleted");
}