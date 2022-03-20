const Dispatcher = require('../models/Dispatcher');
const assert = require('assert').strict;

const dispatchString = '^^<<v<<v><v^^';
const dispatcher = new Dispatcher(dispatchString);

const dispatcherTests = () => {
  describe("Dispatcher", function() {
    it("should be able to return the dispatch string via getDispatch()", function() {
      assert.equal(dispatcher.getDispatch(), dispatchString);
    });

    describe('dispatch()', function () {
      describe("should be able to tell if dispatching part 1 or part 2 via Nums", function() {
        it("should be able to tell if dispatching part 1", function() {
          assert.equal(dispatcher.dispatch(1), true);
        });
        it("should be able to tell if dispatching part 2", function() {
          assert.equal(dispatcher.dispatch(2), true);
        });
        it("should NOT dispatch if 3", function() {
          assert.notEqual(dispatcher.dispatch(3), true);
        });
      });

      describe("should be able to tell if dispatching part 1 or part 2 via Strings", function() {
        it("should be able to tell if dispatching part 1", function() {
          assert.equal(dispatcher.dispatch('1'), true);
        });
        it("should be able to tell if dispatching part 2", function() {
          assert.equal(dispatcher.dispatch('2'), true);
        });
        it("should NOT dispatch if 3", function() {
          assert.notEqual(dispatcher.dispatch('3'), true);
        });
      });

      describe("should be able to tell if input is NOT part 1 or part 2", function() {
        it("should return false if entering a random string", function() {
          assert.equal(dispatcher.dispatch('random'), false);
        });
        it("should return false if entering other numbers", function() {
          assert.equal(dispatcher.dispatch('3'), false);
          assert.equal(dispatcher.dispatch('0'), false);
          assert.equal(dispatcher.dispatch(0), false);
          assert.equal(dispatcher.dispatch(3), false);
        });
      });
    });

    describe('dispatchDriver()', function () {
      it("should be able to tell if dispatchStr is NOT a string", function() {
        assert.equal(dispatcher.dispatchDriver(123), false);
      });

      it("should be able to tell if dispatchStr IS a string", function() {
        assert.equal(dispatcher.dispatchDriver("test"), true);
      });
    });
    
  });
}

module.exports = { dispatcherTests };