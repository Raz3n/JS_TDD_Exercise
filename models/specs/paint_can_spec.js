const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function() {

  let paintcan;

  beforeEach(function () {
    paintcan = new PaintCan(50);
  });

  it('should be able to check amount of paint', function(){
    const actual = paintcan.isEmpty();
    assert.strictEqual(actual, false)
  });

  it('should be able to empty itself of paint', function(){
    paintcan.emptyPaint();
    const actual = paintcan.litres;
    assert.strictEqual(actual, 0)
  });

});

//ending up with -50l at least the paint can is thoroughly empty.
//forgot () on emptyPaint. SYNTAX IS LOVE SYNTAX IS LIFE.
