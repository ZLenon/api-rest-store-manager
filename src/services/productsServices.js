const modelsProduct = require('../models');

const findAllService = async () => {
  const insertId = await modelsProduct.findAllModel();
  return insertId;
};

const findByIDService = async (id) => {
  const insertId = await modelsProduct.findByIDModel(id);
  
  return insertId;
};

const createProductService = async (product) => {
  const insertedId = await modelsProduct.createProductModel(product);
  const objProduct = await modelsProduct.findByIDModel(insertedId);

  return objProduct;
};

module.exports = {
  findAllService,
  findByIDService,
  createProductService,
};