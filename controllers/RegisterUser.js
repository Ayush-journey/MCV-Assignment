const {UserModel} = require('../models/UserSchema');
const {generateHash} =require('../utils/encryption');
const {generateSalt} = require('../utils/encryption');

function RegisterUser(req,res){
    let username=req.body.username;
    let email=req.body.email;
    let password=req.body.password;

    const salt = generateSalt();
    const hashPassword = generateHash(password,salt);

    let UserData = {
        username:username,
        email:email,
        password:hashPassword
    }

    let result = new UserModel(UserData);
    result.save().then((item)=>{
        res.send(`User added successfully
        ${item}`);
    }).catch((err)=>{
        res.send('Data could not be saved into the database');
    })
}

module.exports=RegisterUser;