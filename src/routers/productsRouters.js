const express = require('express');

const router = express.Router();
const controllers = require('../controllers');
const midware = require('../middlewares');

router.get('/', controllers.findAllControler);
router.get('/:id', controllers.findByIDControler);
router.post('/', midware.validName, controllers.createProductControler);
router.put('/:id', midware.validName, controllers.pachProduct);
router.delete('/:id', controllers.deleteProduct);

module.exports = router;