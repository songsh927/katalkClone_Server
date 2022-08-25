import 'express-async-errors';

export async function findOne(userId){
    console.log(userId)
    const data = users.find((user) => user.userId == userId);
    if(data){
        return data;
    }
    return 'can not find';
}





const users = [
    {
        'id' : 1,
        'name' : '손흥민',
        'phone' : '01012341234',
        'userId' : 'sonNo7',
        'picture' : '',
      },
      {
        'id' : 2,
        'name' : '박지성',
        'phone' : '01012341234',
        'userId' : 'jspark',
        'picture' : '',
      },
      {
        'id' : 3,
        'name' : '홍길동',
        'phone' : '01012341234',
        'userId' : 'honggildong123',
        'picture' : '',
      },
      {
        'id' : 4,
        'name' : '송짬마',
        'phone' : '01098765432',
        'firendId' : 'jjamma',
        'picture' : ''
      }
]