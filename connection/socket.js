import {Server} from 'socket.io';

export function initSocket(server){

    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('socket connection');
        let roomId;

        socket.on('roomId', (roomData) => {
            console.log(roomData);
            roomId = roomData.roomId
            socket.join(roomId);
            
        });

        socket.on('send', (msgData) => {
            console.log('roomId : ' + msgData.roomId + ' msg : ' +msgData.text);
            io.sockets.to(roomId).emit('rec', msgData);
        });
    })

}