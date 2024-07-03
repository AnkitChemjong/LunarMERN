import { Router } from "express";
import {creates} from '../controller/create.js';
import { reads } from "../controller/read.js";
import { deletes } from "../controller/deletes.js";
import { updates } from "../controller/updates.js";



const router=Router();

router.route('/').get(reads).post(creates).patch(updates).delete(deletes);

export default router;