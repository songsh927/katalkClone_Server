import {Server} from 'socket.io';

export function initSocket(server){

    const io = new Server(server);
    let roomId;

    io.on('connection', (socket) => {
        console.log('socket connection');
        

        socket.on('roomId', (roomData) => {
            console.log(roomData);
            roomId = roomData.roomId
            socket.join(roomId);
            
        });

        socket.on('send', (msgData) => {
            io.sockets.emit('rec', msgData);
        });
    })

}