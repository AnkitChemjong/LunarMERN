import {Router} from 'express';
import {user} from '../controller/user.js';
import {log} from '../controller/log.js';
import {delCookie} from '../controller/clear.js';
import { giveUser } from '../controller/give.js';
import {del} from '../controller/del.js';
import {getUser} from '../controller/getUser.js';
import {updateUser} from '../controller/up.js';

const userRouter=Router();

userRouter.post('/create',user);
userRouter.post('/log',log);
userRouter.delete('/clear',delCookie);
userRouter.get('/get',giveUser);
userRouter.delete('/email',del);
userRouter.get('/getUser',getUser);
userRouter.put('/updateUser/:id',updateUser);

export default userRouter;