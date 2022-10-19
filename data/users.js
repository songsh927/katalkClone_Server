import 'express-async-errors';

export async function findById(id){
  const user = users.find((user) => user.id == id);
  if(user){
    return user;
  }
  return null;
}

export async function findByuserId(userId){
    const user = users.find((user) => user.userId == userId);
    if(user){
        return user;
    }
    return null;
}

export async function findByuserName(userName){
  const data = users.find((user) => user.name == userName);
  if(data){
    return true;
  }
  return null;
}

export async function create(userName, phone, userId, userPassword){

  const user = {
    'id' : users.length+1,  //db에서 처리할것
    'name' : userName,
    'phone' : phone,
    'userId' : userId,
    'userPassword' : userPassword,
    'profile' : '',
    'friendId' : []
  }

  users.push(user);
  return user.id;
}

export async function updateProfile(profilePath , id){
  const user = await findById(id);

  if(user){
    user.profile = `./${profilePath}`;
  }
  
  return user;
}

export async function addFriendById(id, friendId){
  const user = await findById(id);
  user.friendId.push(friendId)
}

export async function deleteFriendById(id, friendId){
  const user = await findById(id);
  user.friendId = user.friendId.filter(id => id !== friendId)
}



const users = [
    {
        'id' : 1,
        'name' : '손흥민',
        'phone' : '01012341234',
        'userId' : 'sonNo7',
        'userPassword' : '$2b$12$uginurmtoNbfArgHHBq3NOaYj1aJLBWKI1/e7A8C1VqB3esp6QdUG',
        'profile' : '',
        'friendId' : ['2','3']
      },
      {
        'id' : 2,
        'name' : '박지성',
        'phone' : '01012341234',
        'userId' : 'jspark',
        'userPassword' : '$2b$12$uginurmtoNbfArgHHBq3NOaYj1aJLBWKI1/e7A8C1VqB3esp6QdUG',
        'profile' : '',
        'friendId' : ['1','3']
      },
      {
        'id' : 3,
        'name' : '홍길동',
        'phone' : '01012341234',
        'userId' : 'honggildong123',
        'userPassword' : '$2b$12$ZLhm3bMl9T.WXeNruKqLo.RwSGJjK6xcxnQPxaOauheaUPTDgPHbS',
        'profile' : '',
        'friendId' : ['1','2']
      },
      {
        'id' : 4,
        'name' : '송짬마',
        'phone' : '01098765432',
        'userId' : 'jjamma',
        'userPassword' : '$2b$12$uginurmtoNbfArgHHBq3NOaYj1aJLBWKI1/e7A8C1VqB3esp6QdUG',
        'profile' : '',
        'friendId' : [1,2,3]
      }
]
