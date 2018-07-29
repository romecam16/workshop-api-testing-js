const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {
});

it('Consume GET Service', () => {
  return agent.get('https://httpbin.org/ip').then((response) => {
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.property('origin');
  });
});

it('Consume GET Service with query parameters', () => {
  const query = {
    name: 'John',
    age: '31',
    city: 'New York'
  };

  return agent.get('https://httpbin.org/get')
    .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.args).to.eql(query);
    });
});

it('Consume HEAD Service', () => {
  
return agent.head('https://httpbin.org/')
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.header['server']).to.equal('gunicorn/19.9.0');
    });
});

it('Consume  PUT Service with query2 parameters', () => {
  const query2 = {
    name: 'Camilo',
    age: '28',
    target: 'Testing'
  };

  return agent.put('https://httpbin.org/put')
    .query(query2)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.args).to.eql(query2);
    });
});



it('Consume  DELETE Service with query parameters', () => {
  const query = {
    name: 'Camilo',
    age: '28',
    target: 'Testing'
  };

  return agent.del('https://httpbin.org/delete')
    .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.args).to.eql(query);
    });
});

it('Consume  PATCH Service with query parameters', () => {
  const query = {
    name: 'Pedro'
  };

  return agent.patch('https://httpbin.org/patch')
    .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.args).to.eql(query);
      expect(response.body).to.have.property('origin')
    });
});
