import {Router} from 'express';
import {user} from '../controller/user.js';

const userRouter=Router();

userRouter.post('/create',user);

export default userRouter;