const DeliveryAid = require('../models/DeliveryAid');
const assert = require('assert').strict;

const deliveryAid = new DeliveryAid();

const deliveryAidTests = () => {
  describe("DeliveryAid", function() {
    it("should start location at [0,0]", function() {
      assert.deepEqual(deliveryAid.location, [0,0]);
    });

    describe('getLocation()', () => {
      it('should return the location', () => {
        assert.equal(deliveryAid.location, deliveryAid.getLocation());
      });
    });

    describe('getHousesDelivered()', () => {
      deliveryAid.setCoordinates([0,0]);
      deliveryAid.housesDelivered = {
        '0,0': 1
      }

      deliveryAid.dispatch('^>v<')

      // console.log('deliveryAid.housesDelivered',deliveryAid.housesDelivered)
      
      it('should return the housesDelivered Obj', () => {
        assert.deepEqual(deliveryAid.getHousesDelivered(), { '0,0': 2, '0,1': 1, '1,1': 1, '1,0': 1 });
      });
    });

    describe('getPizzasDelivered()', () => {
      it('should return the pizzas delivered', () => {
        assert.equal(deliveryAid.getPizzasDelivered(), 4);
      });
    });

    describe('setCoordinates()', () => {
      it('should return true if parameter is of type array', () => {
        assert.equal(deliveryAid.setCoordinates([0,0]), true);
      });
      it('should return false if parameter is not an array', () => {
        assert.equal(deliveryAid.setCoordinates('0,0'), false);
      });
      it('should set a new location', () => {
        deliveryAid.setCoordinates([0,1]);
        assert.deepEqual(deliveryAid.getLocation(), [0,1]);
        assert.notDeepEqual(deliveryAid.getLocation(), [0,0]);
      });
      it('should update pizzas delivered by 1', () => {
        deliveryAid.housesDelivered = {
          '0,0': 1
        }
        deliveryAid.setCoordinates([0,1]);
      
        assert.equal(deliveryAid.getPizzasDelivered(), 2);
      });
    });

    describe('dispatch()', () => {
      it('should call the move method with each iteration', () =>{
        deliveryAid.setCoordinates([0,0]);
        deliveryAid.housesDelivered = {
          '0,0': 1
        }

        deliveryAid.dispatch('>');
        // console.log('deliveryAid.loocation', deliveryAid.loocation)
        assert.deepEqual(deliveryAid.getLocation(), [1,0]);
      });
      it('should call the move method with each iteration', () =>{
        deliveryAid.setCoordinates([0,0]);
        deliveryAid.housesDelivered = {
          '0,0': 1
        }

        deliveryAid.dispatch('^>v<');
        // console.log('deliveryAid.loocation', deliveryAid.loocation)
        assert.deepEqual(deliveryAid.getLocation(), [0,0]);
      });
    });
    
    describe('move()', () => {
      beforeEach(() => {
        deliveryAid.setCoordinates([0,0]);
        deliveryAid.housesDelivered = {
          '0,0': 1
        }
      });
      it('should return early if move direction is invalid', () => {
        assert.equal(deliveryAid.move('+'), false);
      });
      it('should return true if move is valid', () => {
        assert.equal(deliveryAid.move('v'), true);
      });
      it('should move delivery aid right on ">"', () => {
        deliveryAid.move('>');

        assert.deepEqual(deliveryAid.getLocation(), [1,0]);
      });
      it('should move delivery aid down on "v"', () => {
        deliveryAid.move('v');

        assert.deepEqual(deliveryAid.getLocation(), [0,-1]);
      });
      it('should move delivery aid left on "<"', () => {
        deliveryAid.move('<');

        assert.deepEqual(deliveryAid.getLocation(), [-1, 0]);
      });
      it('should move delivery aid up on "^"', () => {
        deliveryAid.move('^');

        assert.deepEqual(deliveryAid.getLocation(), [0,1]);
      });
    });

    // describe('mocha before hooks', function () {
    //   before(() => console.log('*** top-level before()'));
    //   beforeEach(() => console.log('*** top-level beforeEach()'));
    //   describe('nesting', function () {
    //     before(() => console.log('*** nested before()'));
    //     beforeEach(() => console.log('*** nested beforeEach()'));
    //     it('is a nested spec', () => true);
    //   });
    // });
    
  });
}

module.exports = { deliveryAidTests };