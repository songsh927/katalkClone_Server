import express from 'express'

import authRouter from './route/auth.js';
import chatRouter from './route/chat.js';
import userRouter from './route/user.js';

const app = express();

app.use(express.json());

app.route('/user', userRouter);
app.route('/chat', chatRouter);
app.route('/auth', authRouter);

app.use((req, res, next) => {
    res.statusCode(404);
})

app.use((error, req, res, next) => {
    console.error(error);
    res.statusCode(500);
})