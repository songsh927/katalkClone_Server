import express from 'express';
import * as userController from '../controller/user.js';
import {isAuth} from '../middleware/auth.js';

const router = express.Router();

//내정보불러오기
router.get('/me', isAuth, userController.getMyInfo);

//내정보수정
router.put('/me', isAuth, userController.updateMyInfo);

//내사진추가
router.post('/picture', userController.imageUpload);

//친구찾기
router.get('/find', userController.findFriend);

//친구추가
router.post('/add', isAuth, userController.addFriend);

//친구삭제
router.delete('/del', isAuth, userController.deleteFriend);

export default router;