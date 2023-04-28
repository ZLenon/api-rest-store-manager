const {
  findAllModel,
  findByIDModel,
  createProductModel,
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
};