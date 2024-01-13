import express from 'express';
import AuthController from '../controllers/Authcontroller';

const router = express.Router();

router.post('/api/auth/register', AuthController.register);

export default router;
