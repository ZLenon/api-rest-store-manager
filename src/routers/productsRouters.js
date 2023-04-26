const express = require('express');

const router = express.Router();
const productController = require('../controllers');

router.get('/products', productController.findAllControler);
router.get('/products/:id', productController.findByIDControler);
router.post('/products', productController.createProductControler);

module.exports = router;