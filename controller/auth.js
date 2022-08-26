import 'express-async-errors';
import * as userRepository from '../data/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userData = {
    'userId' : 'son',
    'userPassword' : '1234qwer'
}

export async function login(req, res){
    const {userId, userPassword} = req.body;
    const user = await userRepository.findByuserId(userId);

    if(user){
        return res.status(401).json({message: `Invalid username or password`});
    }

    if(user.userPassword !== userPassword){
        return res.status(401).json({message: `Invalid username or password`});
    }

    return res.sendStatus(200)
}

export async function signup(req, res){
    const {userName, phone, userId, userPassword} = req.body;
    const user = await userRepository.findByuserId(userId);
    if(user){
        return res.status(400).json({message : `존재하는 아이디 입니다.`})
    }
    userRepository.create(userName, phone, userId, userPassword);
    return res.sendStatus(201);
}

export async function logout(req, res){}

export async function me(req, res){}