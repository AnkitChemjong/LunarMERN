import express from "express";
import sequelize from './connection/sequelize.js';
import dotenv from 'dotenv';
dotenv.config();
// import router from './route/router.js';
import userRouter from './route/userRoute.js';


const app= express();
const port=process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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
