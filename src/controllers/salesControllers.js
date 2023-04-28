const services = require('../services');

// Requisito 6
const createSaleController = async (request, response) => {
  const allBody = request.body;
  const sold = await services.createSaleService(allBody);
  if (sold.status) {
    return response.status(sold.status).json({ message: sold.message });
  }
  return response.status(201).json(sold);
};
// Requisito 8
const findAllSales = async (_request, response) => {
  const allSales = await services.findAllSales();
  return response.status(200).json(allSales);
};
const findByIDSales = async (request, response) => {
  const { id } = request.params;
  const sales = await services.findByIDSales(+id);
  if (sales.length === 0) {
  return response.status(404).json({ message: 'Sale not found' });    
  }
  return response.status(200).json(sales);
};

module.exports = {
  createSaleController,
  findAllSales,
  findByIDSales,
};