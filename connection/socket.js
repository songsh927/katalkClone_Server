import {Server} from 'socket.io';

export function initSocket(server){

    const io = new Server(server);
    let roomId;

    io.on('connection', (socket) => {
        console.log('socket connection');
        

        socket.on('roomId', (roomData) => {
            roomId = roomData;
            socket.join(roomData);
            
        });

        socket.on('send', (msgData) => {
            io.in(msgData.roomId).emit('rec', msgData);
        });
    })

}