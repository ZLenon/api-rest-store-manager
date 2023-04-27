const validProduct = async (request, response, next) => {
  const arrayProducts = request.body;
  
  if (arrayProducts.some((product) => product.productId === undefined)) {
    return response.status(400).json({ message: '"productId" is required' });    
  }
  
  if (arrayProducts.some((product) => product.quantity === undefined)) {
    return response.status(400).json({ message: '"quantity" is required' }); 
  }
  
  if (arrayProducts.some((product) => product.quantity <= 0)) {
    return response.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' }); 
  }
  next();
};

module.exports = validProduct;