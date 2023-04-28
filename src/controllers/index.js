const {
  findAllControler,
  findByIDControler,
  createProductControler,
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
};