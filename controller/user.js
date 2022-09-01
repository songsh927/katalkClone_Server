import 'express-async-errors';
import * as userRepository from '../data/users.js';

export async function findFriend(req, res){
    const userId = req.query.userId;
    const user = await userRepository.findByuserId(userId);

    const data = {
        'id' : user.id,
        'name' : user.name,
        'picture' : user.picture
    }

    return res.status(200).json(data);

}

export async function addFriend(req, res){
    
    const user = await userRepository.findById(req.id); //=> isAuth 개발 이후 적용
    console.log(user);
    const addUserId = req.query.id;
    console.log(addUserId);
    if(user){
        await userRepository.addFriendById(user.id, addUserId)
    }
    return res.sendStatus(201)
}

export async function deleteFriend(req, res){
    const user = await userRepository.findById(req.id); //=> isAuth 개발 이후 적용
    const addUserId = req.query.id;
    if(user){
        await userRepository.deleteFriendById(user.id, addUserId)
    }
    return res.sendStatus(204)
}

export async function getMyInfo(req, res){
    const user = await userRepository.findById(req.id); //=> isAuth 개발 이후 적용
    if(!user){
        return res.status(404);
    }
    return res.status(200).json(user);
}

export async function updateMyInfo(req, res){
    const picture = req.body;
    const user = await userRepository.findById(req.id); //=> isAuth 개발 이후 적용

    if(!user){
        return res.status(404);
    }

    const updated = userRepository.update(picture, req.query.id);

    if(updated){
        return res.status(203);
    }
    
}