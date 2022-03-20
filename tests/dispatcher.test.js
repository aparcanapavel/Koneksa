const Dispatcher = require('../models/Dispatcher');
const assert = require('assert').strict;

const dispatchString = '^^<<v<<v><v^^';
const dispatcher = new Dispatcher(dispatchString);

const dispatcherTests = () => {
  describe("Dispatcher", function() {
    it("should be able to return the dispatch string via getDispatch()", function() {
      assert.equal(dispatcher.getDispatch(), dispatchString);
    });
  });
}

module.exports = { dispatcherTests };