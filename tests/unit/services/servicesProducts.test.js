const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const productServices  = require('../../../src/services');
const modelsProduct = require('../../../src/models');


const mock = require('../mock');

describe('SERVIÇES', function () {
  afterEach(async function () {
  sinon.restore();
  });
  // -------------------------------------------------------------
  it('Testando função findAllService', async function () {
    sinon.stub(modelsProduct, 'findAllModel').resolves(mock.AllItens); 
    
    const productsArray = await productServices.findAllService();

    expect(productsArray).to.equal(mock.AllItens);
  });
  // -------------------------------------------------------------
  it('Testando função findByIDService', async function () {
    sinon.stub(modelsProduct, 'findByIDModel').resolves(mock.oneIten); 
    
    const TWO = 2;
    const findOBJ = await productServices.findByIDService(TWO);

    expect(findOBJ).to.equal(mock.oneIten);
  });
  // -------------------------------------------------------------
    it('Testando função createProductService', async function () {
    sinon.stub(modelsProduct, 'createProductModel').resolves(4); 
    sinon.stub(modelsProduct, 'findByIDModel').resolves(mock.newIten); 


    const reqBody = {"name": "Excalibur"};
    const newProduct = await productServices.createProductService(reqBody);

    expect(newProduct).to.equal(mock.newIten);
  });
});
