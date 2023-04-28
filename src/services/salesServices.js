const models = require('../models');

// requisito 6
const createSaleService = async (productSales) => {
  const products = await Promise.all(
    // percorrendo o productSales que é um array com produtos vendidos
    productSales.map((produtos) =>
      models.findByIDModel(produtos.productId)),
  );
  const verifyProducts = products.some((produto) => produto === undefined);
  
  if (verifyProducts) {   
    return { status: 404, message: 'Product not found' };
  }
  
  const idSale = await models.createSaleModel();
  
  await Promise.all(
    productSales.map((venda) =>
      models.insertSaleModel(idSale, venda.productId, venda.quantity)),
  );  
  
  return { id: idSale, itemsSold: productSales };
};

// Requisito 8
const findAllSales = async () => {
  const sales = await models.findAllSales();
  return sales;
};
const findByIDSales = async (id) => {
  const sale = await models.findIDSales(id);  
  return sale;
};
module.exports = {
  createSaleService,
  findAllSales,
  findByIDSales,
};