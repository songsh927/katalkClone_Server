import express from 'express';
import * as chatController from '../controller/chat.js';

const router = express.Router();

router.post('/joinRoom', chatController.joinRoom)

router.post('/exitRoom', chatController.exitRoom)

router.post('/sendMsg', chatController.sendMessage)

router.get('/getMsg', chatController.getMessage)

export default router;