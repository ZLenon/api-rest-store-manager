const express = require('express');

const router = express.Router();
const productController = require('../controllers');
const midware = require('../middlewares');

router.get('/products', productController.findAllControler);
router.get('/products/:id', productController.findByIDControler);
router.post('/products', midware.validName, productController.createProductControler);

module.exports = router;