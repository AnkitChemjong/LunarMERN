import db from '../connection/connect.js'
export const reads=(req, res) => {
    try{
   
        const sql='SELECT * FROM data';
        db.query(sql,(err, result)=>{
           if(err) throw new Error(err);
           console.log(result);
           res.send(result);
       
        })
    }
    catch(err){
      console.log(err);
    }
   
   }