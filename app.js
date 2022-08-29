import express from 'express'
import morgan from 'morgan'
import 'express-async-errors';

import authRouter from './route/auth.js';
import chatRouter from './route/chat.js';
import userRouter from './route/user.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.statusCode(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(8080);