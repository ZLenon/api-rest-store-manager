const productServices = require('../services');

const findAllControler = async (_request, response) => {
  const allProducts = await productServices.findAllService();
  return response.status(200).json(allProducts);
};

const findByIDControler = async (request, response) => {
  const { id } = request.params;
  const idProduct = await productServices.findByIDService(+id);
  if (!idProduct) {
  return response.status(404).json({ message: 'Product not found' });    
  }
  return response.status(200).json(idProduct);
};

module.exports = {
  findAllControler,
  findByIDControler,
};