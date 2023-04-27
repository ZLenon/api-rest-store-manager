const services = require('../services');

const createSaleController = async (request, response) => {
  const allBody = request.body;
  const sold = await services.createSaleService(allBody);
  if (sold.status) {
    return response.status(sold.status).json({ message: sold.message });
  }
  return response.status(201).json(sold);
};

module.exports = {
  createSaleController,
};