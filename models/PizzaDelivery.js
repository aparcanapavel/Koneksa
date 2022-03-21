const Dispatcher = require('./Dispatcher');
const DeliveryAid = require('./DeliveryAid');
const prompt = require('prompt-sync')({sigint: true});

class PizzaDelivery{
  constructor(){
    this.currentDay = 1;
  }

  start(){
    const dispatchString = prompt('Enter Dispatch String: ');

    const dayOneDispatcher = new Dispatcher(dispatchString);
    dayOneDispatcher.dispatch(1);
  }
}

module.exports = PizzaDelivery;

/**
 * Flow:
 * 
 * once user runs 'npm run start'
 * 
 * show: current Day.
 * 
 * prompt user to enter dispatch string
 * 
 * show total pizzas delivered + last position
 * 
 * prompt user if they want to continue to day 2
 * 
 * if no, stop program
 * 
 * if yes, 
 * show current day
 * prompt user to enter string
 * 
 * show total pizzas delived 
 */