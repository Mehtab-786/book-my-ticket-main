import { Router } from 'express'
import { login, register } from './auth.controller.js';
import validate from '../../common/middlewares/validate.middlewares.js';
import RegisterDTO from './dto/register.dto.js';
import LoginDTO from './dto/login.dto.js';

const router = Router();

router.post('/register', validate(RegisterDTO), register)
router.post('/login', validate(LoginDTO), login)

export default router;
