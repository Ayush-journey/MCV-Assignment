const {ProductModel} = require('../models/UserSchema');
function addProduct(req,res){
    let name = req.body.name;
    let total_qnty = req.body.total_qnty;
    let category = req.body.category;
    let price = req.body.price;
    
    let product = {
        name:name,
        total_qnty:total_qnty,
        category:category,
        price:price
    }

    let result = new ProductModel(product);
    result.save().then((item)=>{
        res.send(`Product added successfully
        ${item}`);
    }).catch((err)=>{
        console.log(err);
        res.send('Error in adding the product');
    })
}

module.exports=addProduct;