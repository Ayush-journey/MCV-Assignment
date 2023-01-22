const {UserModel} = require('../models/UserSchema');
const {comparePasswords} = require('../utils/encryption');

function LoginUser(req,res){
    const bcrypt = require('bcrypt');
UserModel.findOne({email:req.body.email}, (err,data)=>{
    if(data){
        const passwordMatched = comparePasswords(req.body.password,data.password);
        if(passwordMatched){
            res.send(`Login Successful! Welcome ${data.username}`);
        } else{
            res.send('Invalid Password');
        }
    } else{
        res.send('Invalid login credentials!');
    }
});
}

module.exports=LoginUser;