const {
  findAllService,
  findByIDService,
  createProductService,
  pachProduct,
  deleteProduct,
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
  pachProduct,
  deleteProduct,
};