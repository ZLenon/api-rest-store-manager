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

const createProductModel = async (newProduct) => {
  // insere um novo registro na tabela "products" da base de dados "StoreManager" 
  // com o valor da coluna "name" especificado na cláusula VALUES
  const SQL = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(SQL, [newProduct]);
  // insertId retorna o ID seguinte ao utimo da lista
  return insertId;
};

module.exports = {
  findAllModel,
  findByIDModel,
  createProductModel,
};