const Dispatcher = require('../models/Dispatcher');
const assert = require('assert').strict;

const dispatchString = '^^<<v<<v><v^^';
const dispatcher = new Dispatcher(dispatchString);

const dispatcherTests = () => {
  describe("Dispatcher", function() {
    it("should set the dispatchString instance variable to the input", function() {
      assert.equal(dispatcher.dispatchString, dispatchString);
    });

    describe("getDispatch()", function() {
      it('should return the dispatch string', () => {
        assert.equal(dispatcher.getDispatch(), dispatchString);
      });
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

    describe('dispatchDayOne()', function () {
      it("should be able to tell if dispatchStr is NOT a string", function() {
        assert.equal(dispatcher.dispatchDayOne(123), false);
      });

      it("should be able to tell if dispatchStr IS a string", function() {
        assert.equal(dispatcher.dispatchDayOne("test"), true);
      });
    });

    describe('dispatchDayTwo()', function () {
      it("should be able to tell if dispatchStr is NOT a string", function() {
        assert.equal(dispatcher.dispatchDayTwo(123), false);
      });

      it("should be able to tell if dispatchStr IS a string", function() {
        assert.equal(dispatcher.dispatchDayTwo("test"), true);
      });
    });
    
  });
}

module.exports = { dispatcherTests };