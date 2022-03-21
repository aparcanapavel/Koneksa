const DeliveryAid = require('./DeliveryAid');

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
      this.dispatchDayOne(this.dispatchString);
      return true;
    } else if(switchInt === 2){
      this.dispatchDayTwo(this.dispatchString);
      return true;
    }

    return false;
  }

  /**
   * dispatchDayOne();
   * sends the driver all the dispatchs at ones
   * @param {string} dispatchStr
   */
  dispatchDayOne(dispatchStr){
    if(typeof dispatchStr !== "string") return false;
    
    const driver = new DeliveryAid();

    if(driver){
      driver.dispatch(dispatchStr);
      console.log('\nPizzas Delivered: ', driver.getPizzasDelivered())
    }
    
    return true;
  }

  dispatchDayTwo(dispatchStr){
    if(typeof dispatchStr !== "string") return false;

    const driver = new DeliveryAid();
    const goat = new DeliveryAid()

    return true;
  }

}

module.exports = Dispatcher;