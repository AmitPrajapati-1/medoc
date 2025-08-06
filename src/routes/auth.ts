import {Router} from 'express';
import { login } from '../controllers/auth';
import { register } from '../controllers/auth';
const router = Router();
router.post('/login', login);
router.post('/register', register); 
export default router;