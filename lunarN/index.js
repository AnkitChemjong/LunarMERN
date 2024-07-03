import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import router from './route/router.js';


const app= express();
const port=process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',router);

app.listen(port,()=>console.log(`listening on port:${port} Process id:${process.pid}`));
