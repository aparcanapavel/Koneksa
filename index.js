const PizzaDelivery = require('./models/PizzaDelivery');

const pizzaDeliver = new PizzaDelivery();
if(pizzaDeliver) pizzaDeliver.start();