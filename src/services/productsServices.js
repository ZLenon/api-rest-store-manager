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

const pachProduct = async (id, name) => {
  const product = await models.findByIDModel(id);
  if (!product) {
    return { message: 'Product not found' };
  }
  await models.pachProduct(id, name);
  const patchProduct = await models.findByIDModel(id);

  return patchProduct;
};

const deleteProduct = async (id) => {
  const product = await models.findByIDModel(id);
  if (!product) {
    return { message: 'Product not found' };
  } 
  await models.deleteProduct(id);
};

module.exports = {
  findAllService,
  findByIDService,
  createProductService,
  pachProduct,
  deleteProduct,
};