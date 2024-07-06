import {Router} from 'express';
import {user} from '../controller/user.js';
import {log} from '../controller/log.js';
import {delCookie} from '../controller/clear.js';
import { giveUser } from '../controller/give.js';

const userRouter=Router();

userRouter.post('/create',user);
userRouter.post('/log',log);
userRouter.delete('/clear',delCookie);
userRouter.get('/get',giveUser);

export default userRouter;