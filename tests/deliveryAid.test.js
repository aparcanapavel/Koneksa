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

    describe('getLocation()', () => {
      it('should return the location', () => {
        assert.equal(deliveryAid.location, deliveryAid.getLocation());
      });
    });

    describe('setLocation()', () => {
      it('should return true if parameter is of type array', () => {
        assert.equal(deliveryAid.setLocation([0,0]), true);
      });
      it('should return false if parameter is not an array', () => {
        assert.equal(deliveryAid.setLocation('[0,0]'), false);
      });
    });

    
    
  });
}

module.exports = { deliveryAidTests };