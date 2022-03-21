const Dispatcher = require('./Dispatcher');
const prompt = require('prompt-sync')({sigint: true});

class PizzaDelivery{
  constructor(){
    this.currentDay = 1;
  }

  start(){
    const dayOneStr = prompt('Enter Dispatch String: ');

    const dayOneDispatcher = new Dispatcher(dayOneStr);
    dayOneDispatcher.dispatch(1);

    dayOneDispatcher.printTotals();

    const dayTwoStr = prompt('Enter Dispatch String for day 2: ');
    
    const dayTwoDispatcher = new Dispatcher(dayTwoStr);
    dayTwoDispatcher.dispatch(2);
    dayTwoDispatcher.printTotals();
  }
}

module.exports = PizzaDelivery;