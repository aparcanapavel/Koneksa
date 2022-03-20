class Dispatcher {
  constructor(dispatchString) {
    this.dispatchString = dispatchString;
  }

  getDispatch(){ return this.dispatchString; }

  /**
   * dispatch();
   * determines what part to execute.
   * @param switchKey
   */
  dispatch(switchKey){

    const switchInt = parseInt(switchKey);

    if(switchInt === 1){
      
      return true;
    } else if(switchInt === 2){

      return true;
    }

    return false;
  }

}

module.exports = Dispatcher;