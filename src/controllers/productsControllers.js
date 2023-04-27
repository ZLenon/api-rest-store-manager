const services = require('../services');

const findAllControler = async (_request, response) => {
  const allProducts = await services.findAllService();
  return response.status(200).json(allProducts);
};

const findByIDControler = async (request, response) => {
  const { id } = request.params;
  const idProduct = await services.findByIDService(+id);
  if (!idProduct) {
  return response.status(404).json({ message: 'Product not found' });    
  }
  return response.status(200).json(idProduct);
};

const createProductControler = async (request, response) => {
  const { name } = request.body;
  const newProduct = await services.createProductService(name); 

  return response.status(201).json(newProduct);
};

module.exports = {
  findAllControler,
  findByIDControler,
  createProductControler,
};