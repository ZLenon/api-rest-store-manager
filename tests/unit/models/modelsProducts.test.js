const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
// o método stub do sinon e indicar para o connection do mysql o que o 
// seu método execute deve retornar em caso de sucesso

const modelsProduct = require('../../../src/models');
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
    
    const productsArray = await modelsProduct.findAllModel();

    expect(productsArray).to.equal(mock.AllItens);
  });
  // -------------------------------------------------------------
    it('Testando função findByIDModel', async function () {
    sinon.stub(connection, 'execute').resolves([[mock.oneIten]]);  

    const TWO = 2
    const productOBJ = await modelsProduct.findByIDModel(TWO);

    expect(productOBJ).to.equal(mock.oneIten);

    });
  // -------------------------------------------------------------  
});