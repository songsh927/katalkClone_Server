import express from 'express';
import * as userController from '../controller/user.js';

const router = express.Router();

//내정보불러오기
router.get('/me');

//내정보추가
router.post('/me');

//내정보수정
router.put('/me');

//친구찾기
router.get('/find', userController.findFriend);

//친구추가
router.post('/:id', userController.addFriend);

//친구삭제
router.delete('/:id', userController.deleteFriend);

export default router;