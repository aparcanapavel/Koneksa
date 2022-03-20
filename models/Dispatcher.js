class Dispatcher {
  constructor(dispatchString) {
    this.dispatchString = dispatchString;
  }

  getDispatch(){ return this.dispatchString; }

  /**
   * dispatch();
   * determines what part to execute.
   * @param {string} switchKey
   */
  dispatch(switchKey){

  }

}

module.exports = Dispatcher;