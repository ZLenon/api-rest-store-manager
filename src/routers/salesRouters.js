const express = require('express');

const router = express.Router();
const controllers = require('../controllers');
const midware = require('../middlewares');

router.post('/',
  midware.validProduct,
  controllers.createSaleController);

module.exports = router;