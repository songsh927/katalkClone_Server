
const room = []
/**
 * room entity
 * {
 *  socketId
 *  roomId
 *  id
 * }
 */

export async function create(friendId, id){
    
    const roomId = friendId * id;

    const roomForm = {
        'roomId' : roomId,
        'id' : [friendId, id]
    }

    room.push(roomForm);
    console.log(roomForm);
    return roomForm
}

export async function join(){}

export async function exit(){}