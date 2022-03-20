class DeliveryAid{
  constructor(){
    this.pizzasDelivered = 1; // counts for the 1st move
    this.location = [0,0] // to know their whereabouts
  }

  getLocation(){
    return this.location;
  }

  setLocation(coordinates){ 
    // validate coordinates
    if(typeof coordinates !== "object") return false;
    
    this.location = coordinates; 

    return true;
  }

}

module.exports = DeliveryAid;