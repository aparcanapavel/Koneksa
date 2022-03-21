const PizzaDelivery = require('../index.js');
const assert = require('assert').strict;

const pizzaDelivery = new PizzaDelivery();


const pizzaDeliveryTests = () => {
  describe("PizzaDelivery", function() {
    it('should start on day 1', () => {
      assert.equal(pizzaDelivery.currentDay, 1);
    });
    
  });
}

module.exports = { pizzaDeliveryTests };