const DispatcherTests = require('./tests/dispatcher.test');
const DeliveryAidTests = require('./tests/deliveryAid.test');
const PizzaDeliveryTests = require('./tests/index.test');

/**
 * combining all tests here.
 */

describe('Koneksa Tests', function () {
  DispatcherTests.dispatcherTests();  
  DeliveryAidTests.deliveryAidTests();
  PizzaDeliveryTests.pizzaDeliveryTests();
})