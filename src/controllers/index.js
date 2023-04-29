const {
  findAllControler,
  findByIDControler,
  createProductControler,
  pachProduct,
  deleteProduct,
} = require('./productsControllers');

const {
  createSaleController,
  findAllSales,
  findByIDSales,
} = require('./salesControllers');

module.exports = {
  findAllControler,
  findByIDControler,
  createProductControler,
  createSaleController,
  findAllSales,
  findByIDSales,
  pachProduct,
  deleteProduct,
};