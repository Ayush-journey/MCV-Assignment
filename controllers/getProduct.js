const {ProductModel} = require('../models/UserSchema');

function getProduct(req,res){
    ProductModel.find({},{_v:0},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            if(result.length<=0){
                res.status(404).send('No product found in the database');
            } else{
                res.send(result);
            }
        }
    });
}

module.exports = getProduct;