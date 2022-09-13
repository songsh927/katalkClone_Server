import express from 'express';
import * as chatController from '../controller/chat.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/createRoom', isAuth, chatController.createRoom)

router.post('/joinRoom', isAuth, chatController.joinRoom)

router.post('/exitRoom', chatController.exitRoom)

router.post('/sendMsg', chatController.sendMessage)

//router.get('/getMsg', chatController.getMessage)

router.get('/', chatController.chat)

export default router;