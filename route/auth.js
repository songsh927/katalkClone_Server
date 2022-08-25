import express from 'express';
import * as authController from '../controller/auth.js';
//import validation from 'validation'

const router = express.Router();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.get('/me', authController.me);

export default router;