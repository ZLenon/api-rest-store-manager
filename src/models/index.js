const {
  findAllModel,
  findByIDModel,
  createProductModel,
  pachProduct,
  deleteProduct,
} = require('./productsModels');

const { 
  createSaleModel,
  insertSaleModel,
  findAllSales,
  findIDSales,
} = require('./salesModels');

module.exports = {
  findAllModel,
  findByIDModel,
  createProductModel,
  createSaleModel,
  insertSaleModel,
  findAllSales,
  findIDSales,
  pachProduct,
  deleteProduct,
};