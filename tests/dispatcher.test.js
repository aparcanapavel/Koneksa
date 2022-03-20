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
      it("should be able to tell if dispatching part 1 or part 2 via Nums", function() {
        it("should be able to tell if dispatching part 1", function() {
          assert.equal(dispatcher.dispatch(1), true);
        });
        it("should be able to tell if dispatching part 2", function() {
          assert.equal(dispatcher.dispatch(2), true);
        });
        it("should be able to tell if dispatching part 2", function() {
          assert.notEqual(dispatcher.dispatch(3), true);
        });
      });
    });
    
  });
}

module.exports = { dispatcherTests };