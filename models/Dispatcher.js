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

    if(switchKey === 1){
      
      return true;
    } else if(switchKey === 2){

      return true;
    }

    return false;
  }

}

module.exports = Dispatcher;