import express from 'express';
//import validation from 'validation'

const router = express.Router();

router.post('/signup');

router.post('/login');

router.post('/logout')

router.get('/me')

export default router;