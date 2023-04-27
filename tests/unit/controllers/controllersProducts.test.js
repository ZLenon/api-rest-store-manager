const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const controllers = require('../../../src/controllers');
const services = require('../../../src/services');


const mock = require('../mock');

describe('CONTROLLERS', function () {
  const request = {};
  const response = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
  });

  afterEach(() => {
    sinon.restore();
  });
  // -------------------------------------------------------------
  it('Testando função findAllControler', async function () {
    sinon.stub(services, 'findAllService').resolves(mock.AllItens); 
    
    await controllers.findAllControler(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWithExactly(mock.AllItens);
  });
  // -------------------------------------------------------------
  it('Testando função findByIDControler', async function () {
    // const { id } = request.params;
    request.params = { id: 2 };
    sinon.stub(services, 'findByIDService').resolves(mock.oneIten); 
    
    await controllers.findByIDControler(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWithExactly(mock.oneIten);
  });
  // -------------------------------------------------------------
  it('Testando função findByIDControler Fail Response', async function () {
    // const { id } = request.params;
    request.params = { id: 2 };
    sinon.stub(services, 'findByIDService').resolves(false); 
    
    await controllers.findByIDControler(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWithExactly({ message: 'Product not found' });
  });
    it('Testando função createProductControler', async function () {
    // const { name } = request.body;    
    request.body = { "name": "Excalibur" };
    sinon.stub(services, 'createProductService').resolves(mock.newIten);
    
    const a = await controllers.createProductControler(request, response);

    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWithExactly(mock.newIten);
  });
});