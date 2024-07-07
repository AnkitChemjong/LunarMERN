import express from "express";
import sequelize from './connection/sequelize.js';
import dotenv from 'dotenv';
import cors from 'cors';
import check from './middleware/middle.js';
// import router from './route/router.js';
import userRouter from './route/userRoute.js';
import cookieParser from "cookie-parser";
dotenv.config();


const app= express();
const port=process.env.PORT;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
  methods: ['GET', 'POST','DELETE'], // Allow only GET and POST methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
  credentials: true // Enable Access-Control-Allow-Credentials
};

app.use(cors(corsOptions));
app.use(check("cook"));
// app.use('/',router);
app.use('/user',userRouter);
// Start the Express server
sequelize.sync() // Create tables if they don't exist
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error syncing sequelize:', error);
  });
