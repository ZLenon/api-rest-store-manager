const connection = require('./connection'); 

const findAllModel = async () => {
  const SQL = 'SELECT * FROM StoreManager.products;';
  // o retorno desse conection execute é uma lista
  const [result] = await connection.execute(SQL);
  return result;
};

const findByIDModel = async (id) => {
  // Seleciona tudo da tabela products onde id é igual a...
  const SQL = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [[product]] = await connection.execute(SQL, [id]); 
  return product;
};

module.exports = {
  findAllModel,
  findByIDModel,
};