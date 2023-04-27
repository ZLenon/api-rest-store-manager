const models = require('../models');

const findAllService = async () => {
  const insertId = await models.findAllModel();
  return insertId;
};

const findByIDService = async (id) => {
  const insertId = await models.findByIDModel(id);
  
  return insertId;
};

const createProductService = async (product) => {
  const insertedId = await models.createProductModel(product);
  const objProduct = await models.findByIDModel(insertedId);

  return objProduct;
};

module.exports = {
  findAllService,
  findByIDService,
  createProductService,
};