const {ProductModel} = require('../models/UserSchema');

function getByCategory(req,res){
    var cat = req.params.category;
    ProductModel.find({category:`${cat}`},{_id:0,__v:0}, function(err,result){
        if(err){
            console.log('Not found');
        } else {
            if(result.length<=0){
                res.status(404).send('No product of this category found in the database')
            } else{
                res.send(result);
            }
        }
    });
}

module.exports=getByCategory;