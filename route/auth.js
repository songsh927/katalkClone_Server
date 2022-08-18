import express from 'express';
import * as authController from '../controller/auth.js';
import validation from 'validation'

const router = express.Router();

router.post('/signup');

router.post('/login', authController.login);

router.post('/logout')

router.get('/me')

export default router;