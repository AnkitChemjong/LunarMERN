// import db from '../connection/connect.js'
// export const updates=(req,res)=>{
//     const data=[req.body.userName,req.body.email,req.body.password,req.body.userid];
//     const sql="UPDATE data SET userName=(?),email=(?),password=(?) WHERE userid=(?)"
//     db.query(sql,data,(err,result)=>{
//         if(err) throw new Error(err);
//         console.log("User Updated")
//         res.send("User Updated");
//     })
// }