import 'express-async-errors';
import * as userRepository from '../data/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const expiresIn = process.env.EXPIRES_IN;

export async function login(req, res){
    const {userId, userPassword} = req.body;
    
    const user = await userRepository.findByuserId(userId);
    if(!user){
        return res.status(401).json({message: `Invalid username or password`});
    }

    const isValidPassword = await bcrypt.compare(userPassword, user.userPassword);
    if(!isValidPassword){
        return res.status(401).json({message: `Invalid username or password`});
    }

    const token = createToken(user.id);
    setToken(res, token);

    return res.status(200).json({token, userId});
}

export async function signup(req, res){
    const {userName, phone, userId, userPassword} = req.body;

    const finduserId = await userRepository.findByuserId(userId);
    if(finduserId){
        return res.status(401).json({message : `존재하는 아이디 입니다.`})
    }

    const finduserName = await userRepository.findByuserName(userName);
    if(finduserName){
        return res.status(401).json({message: `가입된 정보가 있습니다.`})
    }

    const hashed = await bcrypt.hash(userPassword, 12);
    const id = await userRepository.create(userName, phone, userId, hashed);

    const token = createToken(id);
    setToken(res, token);
    return res.sendStatus(201);
}

export async function logout(req, res){}

export async function me(req, res){}

function createToken(id){
    return jwt.sign({id}, JWT_SECRET, { expiresIn});
}

function setToken(res, token){
    const options = {
        maxAge : 86400,
        httpOnly : true,
        sameSite : 'none',
        secure : true
    };
    res.cookie('token', token, options);
}