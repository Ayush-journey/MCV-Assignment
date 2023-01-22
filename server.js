const express = require('express');
const mongo = require('mongoose');
const app = express();
app.use(express.json());

mongo.connect('mongodb+srv://ayush21:Ayushmongo%4021@cluster0.osmkwex.mongodb.net/test',(err)=>{
    if(err){
        console.log(err);
    } else{
        console.log('Successfully Connected to the database')
    }
});

const RegisterUser = require('./routes/userRouter');
const addProduct = require('./routes/productRoute');
app.use('/user',RegisterUser);
app.use('/user',addProduct);


app.listen(5000,()=>{
    console.log('Server is running');
})