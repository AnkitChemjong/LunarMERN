import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import cookieParser from 'cookie-parser';
import { authUser } from './middleware/authToken.js';


dotenv.config()

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(authUser('token'));

app.use('/', authRoutes)
app.use('/', blogRoutes)
app.get('/user',(req,res)=>{
    res.send(req.user);
})

const PORT = process.env.PORT

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})