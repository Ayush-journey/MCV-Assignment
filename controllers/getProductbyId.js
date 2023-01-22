const {ProductModel} = require('../models/UserSchema');

function getById(req,res){
    var id = req.params.id;
    ProductModel.find({_id:`${id}`}, function(err,result){
        if(err){
            res.status(404).send('No product found for the given ID');
        } else{
            res.send(result);
        }
    });
}

module.exports = getById;