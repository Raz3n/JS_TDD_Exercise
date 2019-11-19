const Decorator = function (stock) {
  this.stock = [];
};

Decorator.prototype.addStock = function (stock) {
    this.stock.push(stock);
  };

  Decorator.prototype.stockCheck = function () {
      return this.stock.length;
    };

module.exports = Decorator;
