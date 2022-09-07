
const room = []
/**
 * room entity
 * {
 *  roomId
 *  id
 * }
 */

export async function createRoom(friendId, id){
    
    const roomId = friendId * id;

    const roomForm = {
        'roomId' : roomId,
        'id' : [friendId, id]
    }

    room.push(roomForm);
    console.log(roomForm);
    return roomForm
}
