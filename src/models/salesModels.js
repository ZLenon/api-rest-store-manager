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

const findAllSales = async () => {
  const SQL = `
  SELECT
    sp.sale_id AS saleId,
    sp.product_id AS productId,
    sp.quantity AS quantity,
    s.date AS date
  FROM
    sales_products AS sp
    INNER JOIN sales AS s ON sp.sale_id = s.id;
  `;
  const [saleId] = await connection.execute(SQL);
  return saleId;
};

const findIDSales = async (id) => {
  const SQL = `
  SELECT
    sp.product_id AS productId,
    sp.quantity AS quantity,
    s.date AS date
  FROM
    sales_products AS sp
    INNER JOIN sales AS s ON sp.sale_id = s.id
    WHERE sale_id = ?;
  `;
  const [sale] = await connection.execute(SQL, [id]); 
  return sale;
};

module.exports = {
  createSaleModel,
  insertSaleModel,
  findAllSales,
  findIDSales,
};