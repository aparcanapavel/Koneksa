const DeliveryAid = require('../models/DeliveryAid');
const assert = require('assert').strict;

const dispatchString = '^^<<v<<v><v^^';
const deliveryAid = new DeliveryAid(dispatchString);

const deliveryAidTests = () => {
  describe("DeliveryAid", function() {
    it("should start location at [0,0]", function() {
      assert.deepEqual(deliveryAid.location, [0,0]);
    });

    
    
  });
}

module.exports = { deliveryAidTests };