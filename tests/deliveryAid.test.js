const DeliveryAid = require('../models/DeliveryAid');
const assert = require('assert').strict;

const dispatchString = '^^<<v<<v><v^^';
const deliveryAid = new DeliveryAid(dispatchString);

const deliveryAidTests = () => {
  describe("DeliveryAid", function() {
    it("should start location at [0,0]", function() {
      assert.deepEqual(deliveryAid.location, [0,0]);
    });

    it('should have pizzasDelivered = 1', () => {
      assert.equal(deliveryAid.pizzasDelivered, 1);
    })

    
    
  });
}

module.exports = { deliveryAidTests };