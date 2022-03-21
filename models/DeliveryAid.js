class DeliveryAid{
  constructor(){
    this.location = [0,0] // to know their whereabouts
    this.housesDelivered = {
      '0,0': 1
    }
  }

  getLocation(){
    return this.location;
  }

  getPizzasDelivered(){
    // return the length of keys of the Houses delivered
    return Object.keys(this.housesDelivered).length;
  }

  getHousesDelivered() {
    return this.housesDelivered;
  }

  updateDeliveries(coords){
    if(this.housesDelivered[coords]){
      this.housesDelivered[coords] += 1;
    }else {
      this.housesDelivered[coords] = 1;
    }
  }

  setCoordinates(coordinates){ 
    // validate coordinates & updates pizzas delivered
    if(coordinates instanceof Array){
      this.location = coordinates; 
      
      const coordsAsStr = String(coordinates);
      this.updateDeliveries(coordsAsStr);

      return true;
    } else{
      return false;
    }
  }

  dispatch(dispatchStr){
    for(const direction of dispatchStr.split('')){
      this.move(direction);
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