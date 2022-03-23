const express = require('express');
const userRouter = require('./routes/userRouter');
const diskRouter = require('./routes/diskRouter');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use('/', userRouter);
app.use('/', diskRouter);

module.exports = app;
