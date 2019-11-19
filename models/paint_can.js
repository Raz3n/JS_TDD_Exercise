const PaintCan = function (litres) {
  this.litres = litres;
}

PaintCan.prototype.isEmpty = function () {
  if (this.litres > 0) {
    return false;
  } else if (this.litres === 0) {   //forgot extra = sign
    return true;
  };
};

PaintCan.prototype.emptyPaint = function () {
  this.litres = 0;
};


module.exports = PaintCan;
