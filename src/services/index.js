const {
  findAllService,
  findByIDService,
  createProductService,
} = require('./productsServices');

const {
  createSaleService,
} = require('./salesServices');

module.exports = {
  findAllService,
  findByIDService,
  createProductService,
  createSaleService,
};