const modelsProduct = require('../models');

const findAllService = async () => {
  const insertId = await modelsProduct.findAllModel();
  return insertId;
};

const findByIDService = async (id) => {
  const insertId = await modelsProduct.findByIDModel(id);
  
  return insertId;
};

module.exports = {
  findAllService,
  findByIDService,
};