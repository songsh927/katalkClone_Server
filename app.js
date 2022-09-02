import express from 'express'
import morgan from 'morgan'
import 'express-async-errors';

import { initSocket } from './connection/socket.js';
import authRouter from './route/auth.js';
import chatRouter from './route/chat.js';
import userRouter from './route/user.js';
import env from 'dotenv';

env.config();
const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

const server = app.listen(process.env.SERVER_PORT);
initSocket(server);