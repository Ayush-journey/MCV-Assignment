const express = require('express');
const userRouter = express.Router();

const RegisterUser = require('../controllers/RegisterUser');
const LoginUser = require('../controllers/LoginUser');

userRouter.post('/register',RegisterUser);
userRouter.post('/login',LoginUser);

module.exports=userRouter;