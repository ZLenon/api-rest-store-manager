const connection = require('./connection'); 

const createSaleModel = async () => {
  // insere um novo registro na tabela "sales" da base de dados "StoreManager", com a data atual
  // (no momento da execução da consulta) como valor para a coluna "date".
  // A função NOW() é uma função de data/hora que retorna a data e hora atuais 
  // no formato "YYYY-MM-DD HH:MM:SS"
  const SQL = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(SQL);
 
  return insertId;
};

const insertSaleModel = async (idSale, idProduct, qtd) => {
  const SQL = `INSERT INTO StoreManager.sales_products 
  (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  await connection.execute(SQL, [idSale, idProduct, qtd]);
};

module.exports = {
  createSaleModel,
  insertSaleModel,
};