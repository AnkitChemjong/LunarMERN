import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from 'dotenv';
dotenv.config();
import db from "../db.js";
import bcrypt from 'bcrypt';


passport.use(new GoogleStrategy({
    clientID:process.env.CI,
    clientSecret:process.env.CS,
    scope:['profile','email'],
    passReqToCallback:true,
    callbackURL:'http://localhost:8080/auth/callback'

},
async (request,accessToken,refreshToken,profile,done)=>{
      const sql=`SELECT * FROM  auth where email=?`;
    //    console.log(profile);
    db.query(sql,[profile._json.email],async (error,result)=>{
        if(error){
            done(error,null);
        }
        if(result.length>0){
            const user=result[0];
            done(null,user);
        }
        else{
            const sql1='Insert into auth (userName,userImage,email,password,createdAt) values (?,?,?,?,?)';
            const time=new Date().toISOString().slice(0, 19).replace('T', ' ');
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(profile.id,salt);
            db.query(sql1,[profile._json.name,profile._json.picture,profile._json.email,hashedPassword,time],async (error,result)=>{
                if(error){
                   done(error,null);
                }
                const sql3=`SELECT * FROM  auth where email=?`
                db.query(sql3,[profile._json.email],async (error,result)=>{

                    const user=result[0];
                    done(null,user);
                })
            });
        }
    })
}
));