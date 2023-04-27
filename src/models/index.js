const {
  findAllModel,
  findByIDModel,
  createProductModel,
} = require('./productsModels');

const { 
  createSaleModel,
  insertSaleModel,
} = require('./salesModels');

module.exports = {
  findAllModel,
  findByIDModel,
  createProductModel,
  createSaleModel,
  insertSaleModel,
};