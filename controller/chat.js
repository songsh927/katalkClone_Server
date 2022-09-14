import 'express-async-errors';
import * as chatRepository from '../data/chat.js';
import * as roomRepository from '../data/room.js';
//import {getSocketIO} from '../connection/socket.js'

export async function createRoom(req, res){
    const friendId = req.body.friendId;
    const id = req.id;

    const result = await roomRepository.create(friendId, id);
    
    //getSocketIO().join(result.roomId);

    if(result){
        res.status(201).json(result);
    }
}

export async function joinRoom(req, res){
    const roomId = req.body.roomId;
    const id = req.body.id;

    const result = await roomRepository.join(roomId, id);
    //getSocketIO().join(roomId);

    if(result){
        res.status(200).json(result)
    }
}

export async function exitRoom(req, res){
    const roomId = req.query.roomId;
    const id = req.id;

    const result = await roomRepository.exit(roomId, id);

    if(result){
        res.status(204).json(result);
    }
}

export async function sendMessage(req, res){
    const senderId = req.id;
    const {roomId, text} = req.body;
    const today = new Date();
    
    console.log(senderId + "," + roomId + "," + text);

    const msg = await chatRepository.createMsg(roomId, senderId, text, today);
    
    console.log(msg);

    if(msg){
        //getSocketIO().to(roomId).emit(msg);
        res.status(200).json(msg);
    }
    
}

export async function loadMessage(req, res){
    const roomId = req.query.roomId;
}

export async function chat(req, res){
    
}