const express = require('express');
const productRoute = express.Router();
const addProduct = require('../controllers/addProduct');
const getProduct = require('../controllers/getProduct');
const getById = require('../controllers/getProductbyId');
const getByCategory = require('../controllers/getProductbyCategory');
productRoute.post('/addproduct',addProduct);
productRoute.get('/product',getProduct);
productRoute.get('/productbyId/:id',getById);
productRoute.get('/productbycategory/:category',getByCategory);

module.exports = productRoute;