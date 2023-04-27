const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
// o método stub do sinon e indicar para o connection do mysql o que o 
// seu método execute deve retornar em caso de sucesso

const models = require('../../../src/models');
const connection = require('../../../src/models/connection');

const mock = require('../mock');

describe('MODELS', function () {
  // Para que stub não interfira nos outros testes, utiliza o 
  // after para restaurar a conexão.
  afterEach(async function () {
  sinon.restore();
  });
  // -------------------------------------------------------------
  it('Testando função findAllModel', async function () {
    // no arquivo model se encontra assim => connection.execute(SQL);  
    // resoves assincrona -- returns sincrona
    sinon.stub(connection, 'execute').resolves([mock.AllItens]); 
    
    const productsArray = await models.findAllModel();

    expect(productsArray).to.equal(mock.AllItens);
  });
  // -------------------------------------------------------------
    it('Testando função findByIDModel', async function () {
    sinon.stub(connection, 'execute').resolves([[mock.oneIten]]);  

    const TWO = 2
    const productOBJ = await models.findByIDModel(TWO);

    expect(productOBJ).to.equal(mock.oneIten);

    });
  // -------------------------------------------------------------  
    it('Testando função createProductModel', async function () {
    sinon.stub(connection, 'execute').resolves([{insertId: mock.newIten}]);  

    const reqBody = { "name": "Excalibur" };
    const insertId = await models.createProductModel(reqBody);

    expect(insertId).to.equal(mock.newIten);

    });
  // -------------------------------------------------------------  
  it('Testando função createSaleModel', async function () {
    const insertIdMock = mock.requestModel;
    sinon.stub(connection, 'execute').resolves(insertIdMock);  

    const insertId  = await models.createSaleModel();

    expect(insertId).to.be.equal(5);
  });
  // -------------------------------------------------------------  
   it('Testando função insertSaleModel', async function () {
    const insertIdMock = mock.requestModel;
    sinon.stub(connection, 'execute').resolves(insertIdMock);  

    await models.insertSaleModel(8, 2, 5);  

  });
});