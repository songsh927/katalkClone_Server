import 'express-async-errors';

const userData = {
    'userId' : 'son',
    'userPassword' : '1234qwer'
}

export async function login(req, res){
    const {userId, userPassword} = req.body;
    
    if(userId === userData.userId && userPassword === userData.userPassword){
        return res.sendStatus(200);
    };
    return res.sendStatus(400);
}

export async function signup(req, res){
    const {userName, phone, userId, userPassword} = req.body;

    console.log(userName, phone, userId, userPassword);
    return res.sendStatus(201);
}

export async function logout(req, res){}

export async function me(req, res){}