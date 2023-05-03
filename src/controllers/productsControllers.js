const services = require('../services');

const findAllControler = async (_request, response) => {
  const allProducts = await services.findAllService();
  return response.status(200).json(allProducts);
};

const findByIDControler = async (request, response) => {
  const { id } = request.params;
  Number(id);
  const idProduct = await services.findByIDService(id);
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

const pachProduct = async (request, response) => {
  const { id } = request.params;
  Number(id);
  const { name } = request.body;
  const product = await services.pachProduct(id, name);
  if (product.message) {
    return response.status(404).json(product);
  }
  return response.status(200).json(product);
};

const deleteProduct = async (request, response) => {
  const { id } = request.params;
  Number(id);
  const msg = await services.deleteProduct(id);
  if (msg) {
    return response.status(404).json(msg);
  }
  return response.status(204).json();
};

module.exports = {
  findAllControler,
  findByIDControler,
  createProductControler,
  pachProduct,
  deleteProduct,
};