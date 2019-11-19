const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function() {

  let decorator;

  it('should be able to add stock', function() {
    decorator.addStock('brush')
    const actual = decorator.stockCheck();
    assert.strictEqual(actual, 1)
  });

});
