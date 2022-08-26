import 'express-async-errors';

export async function findByuserId(userId){
    console.log(userId)
    const data = users.find((user) => user.userId == userId);
    console.log(data);
    if(data){
        return data;
    }
    return false;
}

export async function create(userName, phone, userId, userPassword){

  const user = {
    'id' : users.length+1,
    'name' : userName,
    'phone' : phone,
    'userId' : userId,
    'userPassword' : userPassword,
    'pic' : ''
  }

  users.push(user);
  return user;
}



const users = [
    {
        'id' : 1,
        'name' : '손흥민',
        'phone' : '01012341234',
        'userId' : 'sonNo7',
        'userPassword' : '',
        'picture' : '',
      },
      {
        'id' : 2,
        'name' : '박지성',
        'phone' : '01012341234',
        'userId' : 'jspark',
        'userPassword' : '1234q',
        'picture' : '',
      },
      {
        'id' : 3,
        'name' : '홍길동',
        'phone' : '01012341234',
        'userId' : 'honggildong123',
        'userPassword' : '',
        'picture' : '',
      },
      {
        'id' : 4,
        'name' : '송짬마',
        'phone' : '01098765432',
        'firendId' : 'jjamma',
        'userPassword' : '',
        'picture' : ''
      }
]