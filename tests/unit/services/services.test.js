const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const services  = require('../../../src/services');
const models = require('../../../src/models');


const mock = require('../mock');

describe('SERVIÇES', function () {
  afterEach(async function () {
  sinon.restore();
  });
  // -------------------------------------------------------------
  it('Testando função findAllService', async function () {
    sinon.stub(models, 'findAllModel').resolves(mock.AllItens); 
    
    const productsArray = await services.findAllService();

    expect(productsArray).to.equal(mock.AllItens);
  });
  // -------------------------------------------------------------
  it('Testando função findByIDService', async function () {
    sinon.stub(models, 'findByIDModel').resolves(mock.oneIten); 
    
    const TWO = 2;
    const findOBJ = await services.findByIDService(TWO);

    expect(findOBJ).to.equal(mock.oneIten);
  });
  // -------------------------------------------------------------
    it('Testando função createProductService', async function () {
    sinon.stub(models, 'createProductModel').resolves(4); 
    sinon.stub(models, 'findByIDModel').resolves(mock.newIten); 


    const reqBody = {"name": "Excalibur"};
    const newProduct = await services.createProductService(reqBody);

    expect(newProduct).to.equal(mock.newIten);
    });
  // -------------------------------------------------------------
  it('Testando função createSaleService', async function () {
    const products = mock.twoIten; 
    sinon.stub(models, 'findByIDModel').resolves([products]);
    sinon.stub(models, 'createSaleModel').resolves(10);
    sinon.stub(models, 'insertSaleModel').resolves(1, 2, 5);
        
    const newProduct = await services.createSaleService(mock.reqBody);
    
    expect(newProduct).to.deep.equal(mock.reqBodyResolves);
  });
  // -------------------------------------------------------------
  it('Testando função createSaleService FAIL Response', async function () {
    sinon.stub(models, 'findByIDModel').resolves(undefined);

    const newProduct = await services.createSaleService(mock.reqBody);

    expect(newProduct).to.deep.equal({ status: 404, message: 'Product not found' });
  });
  // -------------------------------------------------------------
  it('Testando função findAllSales', async function () {
    const allSales = mock.allSales; 
    sinon.stub(models, 'findAllSales').resolves(allSales);
        
    const sales = await services.findAllSales();
    
    expect(sales).to.be.equal(allSales);
  });
  // -------------------------------------------------------------
  it('Testando função findIDSales', async function () {
    const oneSale = mock.oneSale; 
    sinon.stub(models, 'findIDSales').resolves(oneSale);
        
    const sale = await services.findByIDSales(2);
    
    expect(sale).to.be.equal(oneSale);
  });

});
