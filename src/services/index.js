const {
  findAllService,
  findByIDService,
  createProductService,
} = require('./productsServices');

const {
  createSaleService,
  findAllSales,
  findByIDSales,
} = require('./salesServices');

module.exports = {
  findAllService,
  findByIDService,
  createProductService,
  createSaleService,
  findAllSales,
  findByIDSales,
};