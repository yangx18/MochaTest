var add = require('../src/add.js');
var expect = require('chai').expect;

describe('Add the number y to x', function() {
  it('add 2 to 1 should be equal to 3', function() {
    expect(add(1, 2)).to.be.equal(3);
  });


});
