// import db from '../connection/connect.js'
// export const creates=(req, res) => {
//     try{

//         const value=[req.body.userName,req.body.email, req.body.password]; 
//      const sql='INSERT INTO data (userName,email,password) VALUES (?,?,?)';
//      db.query(sql,value,(err, result)=>{
//         if(err) throw new Error(err);
//         console.log("New User is created")
//       res.send("New user is Created");
//      })
//     }catch(err){
//         console.log(err);
//     }
// }