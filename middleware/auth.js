import jwt from 'jsonwebtoken';
import * as userRepository from '../data/users.js';


const AUTH_ERROR = {message: 'Authentication Error'};
const JWT_SECRET = 'F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z'

export const isAuth = async (req, res, next) => {

    let token;
    const authHeader = req.get('Authorization');
    if(authHeader && authHeader.startsWith('Bearer ')){
        token = authHeader.split(' ')[1];
    }

    if(!token){
        token = req.cookies['token']
    }

    if(!token){
        return res.status(401).json(AUTH_ERROR);
    }

    jwt.verify(
        token,
        JWT_SECRET,
        async (error, decoded) => {
            if(error){
                return res.status(401).json(AUTH_ERROR);
            }
            const user = await userRepository.findById(decoded.id);
            
            if(!user){
                return res.status(401).json(AUTH_ERROR);
            }
            req.id = user.id;
            req.token = token;
            next();
        }
    )
}