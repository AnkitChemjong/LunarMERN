import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';


dotenv.config();
const key=process.env.SECRET;

const make=(user)=>{
if(!user) throw new Error("Invalid");
const token=jwt.sign({userName:user.userName,email:user.email,password:user.password},key);
return token;
}
const give=(token)=>{
if(!token) throw new Error("Invalid");
const payload=jwt.verify(token,key);
return payload;
}

export {make,give}