import 'express-async-errors';
import * as chatRepository from '../data/chat.js';
import * as roomRepository from '../data/room.js';

export async function joinRoom(req, res){
    const friendId = req.body.friendId;
    const id = req.id;

    const result = await roomRepository.createRoom(friendId, id);
    
    if(result){
        res.status(201).json(result);
    }
}

export async function exitRoom(){}

export async function sendMessage(){}

export async function getMessage(){}