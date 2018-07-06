var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('multiply testing', function() {
  it('(2 ^2)^2 should be 16', function() {
    expect(multiply(2, 3)).to.be.equal(16);
  });
  
    it('2 ^2should be 4', function() {
    expect(multiply(2, 2)).to.be.equal(4);
  });
})
