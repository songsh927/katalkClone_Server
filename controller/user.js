import 'express-async-errors';
import * as userRepository from '../data/users.js';

export async function findFriend(req, res){
    const userId = req.query.userId;
    //console.log(userId);
    const data = await userRepository.findOne(userId);
    console.log(data);

    return res.status(200).json(data);

}