// import db from '../connection/connect.js'
// export const deletes=(req,res)=>{
//     const data=[req.body.userid];
//     const sql="DELETE FROM data WHERE userid=(?)"
//     db.query(sql,data,(err,result)=>{
//         if(err) throw new Error(err);
//         console.log("User deleted successfully")
//         res.send("User deleted successfully");
//     })
// }