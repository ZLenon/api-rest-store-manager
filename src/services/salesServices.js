const models = require('../models');

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

module.exports = {
  createSaleService,
};