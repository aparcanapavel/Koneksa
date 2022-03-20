class DeliveryAid{
  constructor(){
    this.pizzasDelivered = 1; // counts for the 1st move
    this.location = [0,0] // to know their whereabouts
  }

  getLocation(){
    return this.location;
  }

  getPizzasDelivered(){
    return this.pizzasDelivered;
  }

  setCoordinates(coordinates){ 
    // validate coordinates & updates pizzas delivered
    if(coordinates instanceof Array){
      this.location = coordinates; 
      this.pizzasDelivered += 1;

      return true;
    } else{
      return false;
    }
  }

  move(direction){
    if(!['^', 'v', '>', '<'].includes(direction)) return false;
    
    let newCoordinates;

    switch (true) {
      case direction === '^':
        newCoordinates = [this.location[0], (this.location[1] + 1)];
        break;

      case direction === 'v':
        newCoordinates = [this.location[0], (this.location[1] - 1)];
        break;

      case direction === '>':
        newCoordinates = [(this.location[0] + 1), this.location[1]];
        break;

      case direction === '<':
        newCoordinates = [(this.location[0] - 1), this.location[1]];
        break;
    
      default:
        break;
    }

    this.setCoordinates(newCoordinates);

    return true;
  }
}

module.exports = DeliveryAid;