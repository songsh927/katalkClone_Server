import {Server} from 'socket.io';
import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

class Socket {
    constructor(server){
        this.io = new Server(server, {
            // cors : {
            //     origin: config.cors.allowOrigin,
            // },
        });

        this.io.use((socket, next) => {
            //const token = socket.handshake.auth.token;
            // if(!token){
            //     return next(new Error('Authentication Error'));
            // }
            // jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            //     if(error){
            //         return next(new Error('Authentication Error'));
            //     }
                next();
            // });
        });

        this.io.on('connection', (socket) => {
            console.log('Socket On');

            socket.on('joinRoom', (roomId) => {
                console.log(roomId);
            });

            socket.on('reqMsg', (msg) => {
                console.log(msg)
            });

        })
    }
}

let socket;
export function initSocket(server){
    if(!socket){
        socket = new Socket(server);
    }
}

export function getSocketIO(){
    if(!socket){
        throw new Error('Try later');
    }
    return socket.io;
}