const express = require('express');

const router = express.Router();
const productRouter = require('./productsRouters');

router.use(productRouter);

module.exports = router;