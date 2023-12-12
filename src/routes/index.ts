import express from "express";
import AppController from "../controllers/AppController";

const router = express.Router();

router.get('/status', AppController.getStatus)

// Auth routes
// router.post('/api/auth/register', AuthController.register);

export default router;
