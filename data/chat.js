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

    const hour = time.getHours();
    const min = time.getMinutes();
    const msgTime = hour + ':' + min;

    const msgData = {
        'roomId' : roomId,
        'id' : id,
        'chat' : text,
        'time' : msgTime
    }

    return msgData;
}

export async function getMsg(){}
