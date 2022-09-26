import 'express-async-errors';
import multer from 'multer';
import * as userRepository from '../data/users.js';


export async function findFriend(req, res){
    const userId = req.query.userId;
    const id = req.query.id;
    let user;
    if(userId){
        user = await userRepository.findByuserId(userId);
    }
    if(id){
        user = await userRepository.findById(id);
    }
    

    const data = {
        'id' : user.id,
        'name' : user.name,
        'phone' : user.phone,
        'userId' : user.userId,
        'picture' : user.picture
    }

    return res.status(200).json(data);

}

export async function addFriend(req, res){
    
    const user = await userRepository.findById(req.id); //=> isAuth 개발 이후 적용
    const addUserId = req.query.id;
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

export async function updateMyInfo(req, res){}

export async function userProfileUpload(req, res){
    // const id = req.id;
    // const fileDest = req.file.destination;
    
    // multer.diskStorage({
    //     destination : (req, file, cb) => {
    //         cb(null, fileDest)
    //     },
    //     filename : (req, file, cb) => {
    //         cb(null, id + '_' + Date.now())
    //     }
    // })

    //console.log(fileDest);
    //console.log(req.file);
    res.sendStatus(200);

}