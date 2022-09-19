const msg = []
/**
 * msg entity
 * {
 *  roomId
 *  id
 *  chat
 * }
 */

export async function createMsg(roomId, id, text, time){

    const msgData = {
        'roomId' : roomId,
        'id' : id,
        'chat' : text,
        'time' : time
    }

    msg.push(msgData);
    return msgData;
}

export async function getMsg(){}
