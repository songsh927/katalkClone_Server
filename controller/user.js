import 'express-async-errors';
import * as userRepository from '../data/users.js';

export async function findFriend(req, res){
    const userId = req.query.userId;
    //console.log(userId);
    const user = await userRepository.findByuserId(userId);

    const data = {
        'id' : user.id,
        'name' : user.name,
        'picture' : user.picture
    }

    return res.status(200).json(data);

}

export async function addFriend(req, res){
    const id = req.params.id;
    const user = await userRepository.findById(id);
    const addUserId = req.query.id;
    if(user){
        await userRepository.addFriendById(user.id, addUserId)
    }
    return res.sendStatus(201)
}

export async function deleteFriend(req, res){

}

export async function getMyInfo(req, res){
    const id = req.query.id
    const user = await userRepository.findById(id); //await userRepository.findById(req.id);
    if(!user){
        return res.status(404);
    }
    return res.status(200).json(user);
}

export async function updateMyInfo(req, res){
    const {name, phone, picture} = req.body;
    const user = await userRepository.findById(req.query.id);//await userRepository.findById(req.id);

    if(!user){
        return res.status(404);
    }

    const updated = userRepository.update(name, phone, picture, req.query.id);

    if(updated){
        return res.status(203);
    }
    
}