const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    email:String,
    password:String
});

const ProductSchema = new Schema({
    name:String,
    total_qnty:Number,
    category:String,
    price:Number
});
const UserModel = mongoose.model('User',UserSchema);
const ProductModel = mongoose.model('Product',ProductSchema)
module.exports={UserModel,ProductModel}